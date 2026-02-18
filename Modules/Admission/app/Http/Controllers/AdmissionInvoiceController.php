<?php

namespace Modules\Admission\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Admission\Enums\InvoiceStatus;
use Modules\Admission\Models\AdmissionInvoice;
use Modules\Admission\Models\Candidate;

class AdmissionInvoiceController extends Controller
{
    /**
     * Display invoices for admin (list all PSB invoices).
     */
    public function index(Request $request): Response
    {
        $institution = current_institution();

        $invoices = AdmissionInvoice::whereHas('candidate', function ($q) use ($institution) {
                $q->where('institution_id', $institution->id);
            })
            ->with('candidate:id,name,registration_number')
            ->when($request->status, fn ($q, $s) => $q->where('status', $s))
            ->latest()
            ->paginate(20)
            ->withQueryString();

        return Inertia::render('Lembaga/Admission/Invoices/Index', [
            'invoices' => $invoices,
            'filters' => $request->only('status'),
            'institutionCode' => $institution->code,
        ]);
    }

    /**
     * Verify payment (admin confirms proof of payment).
     */
    public function verify(Request $request, AdmissionInvoice $invoice): RedirectResponse
    {
        $institution = current_institution();

        $invoice->markAsPaid($request->user()->id);

        return redirect()->back()->with('success', 'Pembayaran berhasil diverifikasi.');
    }

    /**
     * Cancel an invoice.
     */
    public function cancel(AdmissionInvoice $invoice): RedirectResponse
    {
        $invoice->update(['status' => InvoiceStatus::DIBATALKAN]);

        return redirect()->back()->with('success', 'Invoice berhasil dibatalkan.');
    }
}

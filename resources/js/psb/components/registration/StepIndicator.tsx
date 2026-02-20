import React from 'react';

interface StepIndicatorProps {
    currentStep: number;
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
    const steps = [
        { num: 1, label: 'Santri' },
        { num: 2, label: 'Orang Tua' },
        { num: 3, label: 'Sekolah' },
        { num: 4, label: 'Dokumen' },
        { num: 5, label: 'Review' },
    ];

    return (
        <div className="mb-8 overflow-x-auto pb-2">
            <div className="relative flex min-w-[400px] items-center justify-between">
                {/* Connecting Line */}
                <div className="absolute top-1/2 flex w-full -translate-y-1/2 transform items-center px-4">
                    <div className="relative h-1 w-full rounded bg-gray-200">
                        {/* Active line */}
                        <div
                            className="bg-dat-primary absolute top-0 left-0 h-1 rounded transition-all duration-300"
                            style={{
                                width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                            }}
                        ></div>
                    </div>
                </div>

                {/* Step Dots */}
                {steps.map((step) => {
                    const isActiveOrPassed = currentStep >= step.num;
                    const isPassed = currentStep > step.num;

                    return (
                        <div
                            key={step.num}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold shadow transition-all duration-300 ${
                                    isActiveOrPassed
                                        ? 'bg-dat-primary border-dat-primary border-2 text-white'
                                        : 'border-2 border-gray-200 bg-white text-gray-400'
                                }`}
                            >
                                {isPassed ? (
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                ) : (
                                    step.num
                                )}
                            </div>
                            <span
                                className={`mt-2 text-xs font-medium whitespace-nowrap ${
                                    isActiveOrPassed
                                        ? 'text-dat-primary'
                                        : 'text-gray-400'
                                }`}
                            >
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

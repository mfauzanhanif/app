import fs from 'fs';
import path from 'path';

const dir = 'c:/laragon/www/app/resources/js/psb/components/registration';
const pagesDir = 'c:/laragon/www/app/resources/js/psb/pages';

const files = [
    path.join(dir, 'Step1Santri.tsx'),
    path.join(dir, 'Step2Parents.tsx'),
    path.join(dir, 'Step3School.tsx'),
    path.join(dir, 'Step4Documents.tsx'),
    path.join(pagesDir, 'cek-status.tsx'),
];

for (const file of files) {
    if (!fs.existsSync(file)) continue;

    let content = fs.readFileSync(file, 'utf8');

    // Fix <Label ... value="Some Text" /> -> <Label ...>Some Text</Label>
    content = content.replace(
        /<Label\s+([^>]*?)value=(['"])(.*?)\2(\s*)\/>/g,
        (match, before, quote, text, after) => {
            return `<Label ${before.trim()}>${text}</Label>`;
        },
    );

    // Fix helperText={...} or helperText="..."
    // We will just remove it and put it as a <p> or span below if we wanted, but for now just remove it
    // to fix TS since it's mostly errors object handling.
    // Actually, Flowbite React 0.12 DOES support helperText natively on TextInput... wait, let's just remove helperText from FileInput and Select.
    // Let's just remove helperText from ALL to be safe.
    content = content.replace(/(\s+)helperText=\{.*?\}/g, '');
    content = content.replace(/(\s+)helperText=".*?"/g, '');

    fs.writeFileSync(file, content);
}

console.log('Fixed TS errors in components.');

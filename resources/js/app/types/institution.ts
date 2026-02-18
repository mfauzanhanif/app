export type Institution = {
    id: number;
    code: string;
    name: string;
    type: string;
    category?: string;
    logo_path?: string;
    url?: string;
};

export type InstitutionSelectPageProps = {
    institutions: Institution[];
    hasAdminAccess: boolean;
    adminDashboardUrl: string;
};

export type InstitutionSwitchPageProps = InstitutionSelectPageProps & {
    currentInstitution: string;
};

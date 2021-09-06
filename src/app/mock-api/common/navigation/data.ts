/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        // subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id   : 'dashboards.home',
                title: 'Home',
                type : 'basic',
                icon : 'heroicons_outline:home',
                link : '/home'
            },
            {
                id   : 'dashboards.example',
                title: 'Example',
                type : 'basic',
                icon : 'heroicons_outline:chart-pie',
                link : '/example'
            },
        ]
    },
    {
        id      : 'portfolios',
        title   : 'Portfolios',
        // subtitle: 'Unique dashboard designs',
        type    : 'group',
        icon    : 'mat_outline:label_important',
        children: [
            {
                id   : 'portfolios.portfolios',
                title: 'Portfolios',
                type : 'basic',
                icon : 'mat_outline:import_contacts',
                link : '/portfolios/portfolios'
            },
            {
                id   : 'portfolios.import',
                title: 'Import',
                type : 'basic',
                icon : 'mat_outline:import_export',
                link : '/portfolios/import'
            },
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example2',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example3',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example4',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];

import * as React from 'react';
import { Outlet, useLocation, useParams, matchPath } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function Layout() {
    const location = useLocation();
    const { noteId } = useParams();

    const title = React.useMemo(() => {
        if (location.pathname === '/notes/new') {
            return 'New Note';
        }
        if (matchPath('/notes/:noteId/edit', location.pathname)) {
            return `Note ${noteId} - Edit`;
        }
        if (noteId) {
            return `Note ${noteId}`;
        }
        return undefined;
    }, [location.pathname, noteId]);

    return (
        <DashboardLayout>
            <PageContainer title={title}>
                <Outlet />
            </PageContainer>
        </DashboardLayout>
    );
}
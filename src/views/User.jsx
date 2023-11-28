import React from 'react';
import UserTable from '../components/layout/UserTable';
import PageTitle from '../components/layout/PageTitle';

const User = props => (
    <div className="User">
        <PageTitle
            title="User"
            subtitle="Pagina de Usuários" />
    
        <UserTable />
    </div>
)

export default User
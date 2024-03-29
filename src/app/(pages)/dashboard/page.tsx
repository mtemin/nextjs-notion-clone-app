import React from 'react';
import UserMenu from "@/app/_components/usermenu";
import Note from "@/app/_components/note-inputs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ContentBlockModal from "@/app/_components/content-block-modal";
import { useQuery } from '@tanstack/react-query';
import { useAuthQuery } from '@/app/_hooks/useAuthQuery';
import Alert from '@/app/_components/alert';

export default async function Dashboard() {
    const { isAuthenticated } = getKindeServerSession();
    const isLoggedIn = await isAuthenticated();

    return (
        <div className="flex h-full justify-between">
            <Alert type="success" text="Note created successfully" />
            <Alert type="error" text="Note creation failed!" />
            {!isLoggedIn
                && <ContentBlockModal></ContentBlockModal>
            }
            <UserMenu></UserMenu>
            <Note></Note>
        </div>
    );
}

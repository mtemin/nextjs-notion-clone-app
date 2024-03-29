import { LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Username from "@/app/_components/username";
import AddNewNote from "@/app/_components/add-new-note";
import ThemeController from "./theme-controller";
import NoteList from "./note-list";
import SearchNote from "./search-note";
import ToggleSidebar from "./toggle-sidebar";
import Settings from "./settings";
import { supabase } from "../_lib/supabase";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/dist/types";
import Link from "next/link";
import Archive from "./archive";

export default async function UserMenu() {
    const { getUser } = getKindeServerSession();
    let user = await getUser();
    // async function handlePostUser(user: KindeUser) {
    //     await supabase
    //         .from('users')
    //         .insert({ name: user.given_name, surname: user.family_name, picture: user.picture, email: user.email, id: user.id })
    //         .then(result => result.status === 201
    //             ? console.log("Yeni kullanıcı veritabanına kaydedildi")
    //             : console.log("Kullanıcı veritabanına kaydında HATA!")
    //         );
    // }
    // if (user) {
    //     console.log(user)
    //     handlePostUser(user);
    // }

    return (
        <aside id="usermenu" className="z-10 relative h-full bg-base-200 flex flex-col w-1/5 border-r-4 px-5 py-10 border-[--foreground] transition-all duration-500
        max-sm:fixed max-sm:w-[95%] max-lg:w-1/3">
            <ToggleSidebar />
            <div id="user-panel" className="">
                <div className="flex justify-between text-xl font-bold mb-6 ">
                    {// @ts-ignore}
                        <Username user={user} />
                    }
                </div>
                {/* <SearchNote /> */}
                <Settings />
                {/* <Archive /> */}
                <AddNewNote userId={user?.id} />
            </div>
            {user &&
                <NoteList user={user} />
            }
            <div id="notes" className="">
            </div>
            <div className="mt-auto">
                <Link href="/">
                    <button className="btn btn-outline mb-3 w-full">Go to landing page</button>
                </Link>
                {user
                    ? <LogoutLink
                        className="btn btn-primary col-span-1 text-md cursor-pointer w-full">
                        Log out
                    </LogoutLink>
                    : <div className="skeleton mb-1 rounded w-full h-10"></div>

                }
            </div>
        </aside>
    )
}
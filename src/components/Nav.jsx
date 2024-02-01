// Navbar.js

export function Nav() {
    return (
            <header class="max-w-[1170px] mx-auto ">
                <div class="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px]  items-center">
                    <div class="flex justify-end gap-7">
                        <div class="relative">
                            <i class="fa-solid fa-globe text-white absolute top-[12px] left-[6px]"></i>
                            <select class="bg-[black] text-white border-[2px] p-[5px_30px] rounded-[5px] h-[40px]">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                        <button class="bg-red-500 text-white p-[5px_20px] h-[40px]  rounded-[5px]">
                            Sign in
                        </button>
                    </div>
                </div>
            </header>
            
  );
};


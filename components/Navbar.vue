<template>
    <div class="w-full py-6 bg-transparent border-b-[1px] border-slate-200 dark:border-[#3F3F3F] z-20">
        <Container>
            <div class="flex flex-row items-center justify-between gap-3 md:gap-0">
                <div class="flex items-center">
                    <ClientOnly>
                        <Logotype />
                    </ClientOnly>
                </div>
                <MenuIcons />
            </div>
        </Container>
    </div>
</template>
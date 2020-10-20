<template>
    <header class="shadow w-screen">
        <nav>
            <nav class="flex items-center justify-between flex-wrap bg-gradient-to-r from-red-600 p-6">
                <img src="https://placekitten.com/50/50" class="relative left-0 ">
                <div class="felx items-center flex-shrink-0 text-white text-lg mr-6 pl-5 ">
                    Busqueda uwu
                </div>
                <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow ">
                        
                    </div>
                </div>
            </nav>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'PxHeader',
    props: ['asd', 'nel'] 
    }
</script>
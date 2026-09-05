import navigation from "@/config/navigation.json";

export default function Nav() {
    return <nav class="w-full border-b border-gray-200 bg-white"> <div class="mx-auto flex max-w-6xl items-center justify-center px-6 py-5"> <ul class="flex items-center gap-8"> 
    
    {navigation.map((link, i) => {
        return <li key={i} > <a href={link.href} class="relative text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-gray-900 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-gray-900 after:transition-all after:duration-200 hover:after:w-full" > {link.label} </a> </li>
    })}
    

     </ul> </div> </nav>
}
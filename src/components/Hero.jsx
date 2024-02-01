
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <AspectRatio ratio={16 /3} className="bg-muted  bg-center bg-cover">
      <div class="absolute inset-0 flex item-center justify-conter text-center ">
           <div className="item-center mx-auto mt-[20px] " >
            <h1 class="text-4xl font-bold text-black mt-[30px]">hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum commodi iure molestiae minima ab aspernatur nobis facere, repellendus neque iusto nemo vitae error.</p>
           <Button variant="destructive" className="mt-[40px]">Button</Button>
           </div>
        </div>
    </AspectRatio>
    
  )
}

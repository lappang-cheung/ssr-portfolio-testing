import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {
          gridItems.map((item, i) => {
            return (
              <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
              />
            )
          })
        }
      </BentoGrid>
    </section>
  )
}

export default Grid

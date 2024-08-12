import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {
          [{
            title: 'Title 1', description: 'Desc 1', id: 1
          }].map((item, i) => {
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

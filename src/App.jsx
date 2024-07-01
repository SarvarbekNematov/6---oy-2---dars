import { MainCard } from "./components/card/main-card";
import Card_one from "./assets/card-one.png"
import Card_two from "./assets/card-two.png"
import Card_three from "./assets/card-three.png"
import Card_four from "./assets/card-four.png"
import Card_five from "./assets/card-five.png"
import Card_six from "./assets/card-six.png"
import Card_seven from "./assets/card-seven.png"
import Card_nine from "./assets/card-nine.png"
import Card_ten from "./assets/card-ten.png"
import { Box_card } from "./components/card/box-card";
import rukn_first from "./assets/rukn_one.png"

function App() {

  return (
    <>
    <div className="container pt-[50px]">
        <div className="flex justify-between gap-[20px]">
            <Box_card title='Тезкор етказиш' text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
            <Box_card title='Тўлов химояси' text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
            <Box_card title='Юқори сифат' text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
            <Box_card title='Энг сара китоблар' text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"/>
        </div>
    </div>
    <div className="container " >
      <h2 className="text-[32px] mt-[64px] mb-8">Рукнлар</h2>
      <div className="grid justify-between grid-cols-6 pt-[40px]">
        <div className="bg-[url('/src/assets/rukn_one.png')] bg-no-repeat  h-[164px]  relative">
            <h4 className="text-white absolute bottom-[17px] left-[16px] text-[18px]">Жахон адабиёти</h4>
        </div>
        <div className="bg-[url('/src/assets/rukn_two.png')] bg-no-repeat w-[200px] h-[164px] relative">
            <h4 className="text-white absolute bottom-[17px] left-[16px] text-[18px]">Узбек адабиёти</h4>
        </div>
        <div className="bg-[url('/src/assets/rukn_three.png')] bg-no-repeat w-[200px] h-[164px] relative">
            <h4 className="text-white absolute bottom-[17px] left-[16px] text-[18px]">Бизнес ва психология</h4>
        </div>
        <div className="bg-[url('/src/assets/rukn_four.png')] bg-no-repeat w-[200px] h-[164px] relative">
          <h4 className="text-white absolute bottom-[17px] left-[16px] text-[18px]">Болалар адабиёти </h4>
        </div>
        <div className="bg-[url('/src/assets/rukn_five.png')] bg-no-repeat w-[200px] h-[164px] relative">
          <h4 className="text-white absolute bottom-[17px] left-[16px] text-[18px]">Детективлар</h4>
        </div>
        <div className="bg-[url('/src/assets/rukn_six.png')] bg-no-repeat w-[200px] h-[164px] relative">
            <h4 className="text-white absolute bottom-[17px] left-[16px] text-[18px]">Фантастика</h4>
        </div>
      </div>
        
    </div>
    <div className="container">
    <h2 className="text-[32px] mt-[64px] mb-8">Янги қўшилганлар</h2>
      <div className="flex justify-between gap-[24px]">
         <MainCard img = {Card_one} title = {"1984"} />
      <MainCard img = {Card_two} title = {"Rich dad poor dad"} />
      <MainCard img = {Card_three} title = {"Код 8"} />
      <MainCard img = {Card_four} title = {"Даниел КИЗ"} />
      <MainCard img = {Card_five} title = {"Бепарволикнинг но..."} />
      </div>
     

    </div>
    <div className="container">
      <h2 className="text-[32px] mt-[64px] mb-8">Аудио китоблар</h2>
      <div className="flex justify-between gap-[24px]">
        <MainCard img = {Card_six} title = {"1984"} />
      <MainCard img = {Card_seven} title = {"Rich dad poor dad"} />
      <MainCard img = {Card_five} title = {"Код 8"} />
      <MainCard img = {Card_nine} title = {"Даниел КИЗ"} />
      <MainCard img = {Card_ten} title = {"Бепарволикнинг но..."} />
      </div>
      

    </div>
    
    </>
  )
}

export default App
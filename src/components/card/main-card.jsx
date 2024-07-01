import Star from "/src/img_svg/star.svg"
import Earphone from "/src/img_svg/earphone.svg"
import Book from "/src/img_svg/book.svg"
import "/src/index.css"


export const MainCard  = ({img, title}) => {
    return (
            <div className="h-[450px] ">
                <img className="card__img" src={img} alt="img" />
                <h3 className="pt-4">{title}</h3>
                <p className="card__text">SIYOSAT, FANTASTIKA</p>
                <div className="flex justify-between pt-[16px]">
                    <div className="flex gap-[10px]">
                        <img src={Star} alt="icon" />
                        <p className="text-[#FF7F4D]">4.7</p>
                    </div>
                    <div className="flex gap-4">
                        <img src={Earphone} alt="img" />
                        <img src={Book} alt="img" />
                    </div>
                </div>
            </div>
    )
}
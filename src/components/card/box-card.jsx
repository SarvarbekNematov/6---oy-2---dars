import { Fastly } from "/src/react-icons/fastly-icons";


export const Box_card = ({title, text}) => {
    return (
        <div className="flex gap-[19.69px] items-center">
            <div>
                <span className="rounded-[11px] pt-[12px] px-[12px] block w-[48px] h-[48px] bg-[#eef4ff]">
                    <Fastly/>
                </span>
            </div>
            <div className="">
                <h4>{title}</h4>
                <p className="text-[11px] text-[#aaaaaa]">{text}</p>
            </div>
        </div>
    )
}
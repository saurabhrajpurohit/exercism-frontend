import Logo from "../icons/logo.svg";
import Dashboard from "../icons/dashboard.svg";
import Smiley from "../icons/smiley.svg";
import Polygon from "../icons/polygon.svg";
import Alarm from "../icons/alarm.svg";
import Tracks from "../icons/tracks.svg";
import Mentoring from "../icons/mentoring.svg";
import Contribute from "../icons/contribute.svg";
import BadgeIcon from "../icons/badge.svg";
import Menu from "../icons/menu.svg";
import Link from "./Link";
import IconButton from "./IconButton";
import Avatar from "./Avatar";
import Badge from "./Badge";
import FloatButton from "./FloatButton";

const Header = () => {
    return (
        <header className="header border-b-2 border-[#C8D5EF]">
            <div className="flex flex-row items-center h-16 justify-between px-7">
                <div className="flex justify-start space-x-8">
                    <Link href="/" icon={Logo} />
                    <Link text="Dashboard" href="/" icon={Dashboard} active={true} />
                    <Link text="Tracks" href="/" icon={Tracks} />
                    <Link text="Mentoring" href="/" icon={Mentoring} />
                    <Link text="Contribute" href="/" icon={Contribute} />
                </div>
                <div className="flex justify-end items-center space-x-10">
                    <Badge>
                        <IconButton icon={Smiley} onClick={() => console.log("Clicked")} />
                    </Badge>
                    <Badge>
                        <IconButton icon={Polygon} onClick={() => console.log("Clicked")} />
                    </Badge>
                    <Badge count={2}>
                        <IconButton h={9} w={10} className="shadow-[0px_4px_24px_rgba(156,130,38,0.4)] bg-[#FFF4E3] rounded-lg" icon={Alarm} onClick={() => console.log("Clicked")} />
                    </Badge>
                    <FloatButton badge={true} className="bg-[#130B43] text-white" icon={BadgeIcon} text="300K" onClick={() => console.log("Clicked")} />
                    <Avatar src="https://dg8krxphbh767.cloudfront.net/placeholders/user-avatar.svg" />
                    <IconButton icon={Menu} onClick={() => console.log("Clicked")} />
                </div>
            </div>
        </header>
    );
};

export default Header;
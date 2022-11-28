import React from 'react';

import { AiOutlineStar, AiOutlineFacebook } from 'react-icons/ai';
import { BiBone, BiLinkExternal, BiLike } from 'react-icons/bi';
import { BsInstagram, BsFillTelephoneFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import { HiOutlineViewList } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { TbBrandTelegram, TbDogBowl } from 'react-icons/tb';

import { IconContext } from 'react-icons/lib';
import { SideBar } from '../../../ComponentesConstantes/BarraLateral'
import { Interface } from '../../../ComponentesConstantes/Interface';
import '../style.css';

//-------------------------------------------------------------------------------------------------------------------------
const id5_Tel = "(11) 9865-7667";
const id5_City = "Rio de Janeiro";
const id5_Rescue = "5 Animais";
const id5_FavOng = "PetTop";
const id5_VoluntTime = "1 ano";
const id5_Description = "Guilherme Lorem"

const id5_Name = "Guilherme Cosmo";
const id5_User = "@GuiCosmo";
const id5_Banner = "id5_banner"
const id5_Profile = "https://cdn.discordapp.com/attachments/1026668645033709692/1044261029015719957/Guilherme_Cosmo.jpg";
//-------------------------------------------------------------------------------------------------------------------------
export function Rescue5() {
    return (
        <>
            <Interface />
            <div id="Resgatador">
                <div className=" flex">
                <SideBar />
                    <div className='rescueComponent'>
                        <section className={`rescueContainer`}>
                            <div className={`Resg-Header ${id5_Banner}`}>  {/* Trocar Background no CSS*/}
                                <ResgatadorHeader />
                            </div>
                        </section>
                        <section className='flex'>
                            <div>
                                <div className='assd rescueContainer'>
                                    <ResgatadorFavorites />
                                </div>
                                <div className='assd rescueContainer'>
                                    <ResgatadorGallery />
                                </div>
                            </div>
                            <div className='assd'>
                                <ResgatadorBody
                                    TEL={id5_Tel}
                                    CITY={id5_City}
                                    USER={id5_User}
                                    NAME={id5_Name}
                                    BANNER={id5_Banner}
                                    FAVORITE_ONG={id5_FavOng}
                                    RESCUES_TOTAL={id5_Rescue}
                                    PROFILE={id5_Profile}
                                    RESCUE_TIME={id5_VoluntTime}
                                    DESCRIPTION={id5_Description}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

const ResgatadorHeader = ({ NAME, USER, PROFILE }) => {
    return (
        <>
            <div className="profileHeader">
                <div className="profilePhoto">
                    {/* Trocar FOTO na VAR-PHOTO*/}
                    <img src={id5_Profile} />
                </div>

                <div>
                    <div className="profileName">
                        {/* Trocar NOME na VAR-NAME*/}
                        <p>{id5_Name}</p>
                    </div>
                    <div className="profileDetails flex justify ">
                        <div>
                            {/* Trocar USUARIO na VAR-USER*/}
                            <p>{id5_User}</p>
                            <p>Resgatador</p>
                        </div>
                        <div className="profileButtons flex">
                            <IconContext.Provider value={{ size: "25px" }}>
                                <div className="profileBBorder"><AiOutlineStar /></div>
                                <button>Mensagem</button>
                                <div className="profileBBorder"><HiOutlineViewList /></div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const ResgatadorBody = ({ TEL, USER, CITY, NAME, BANNER, FAVORITE_ONG, RESCUES_TOTAL, PROFILE, RESCUE_TIME, DESCRIPTION }) => {
    {/* ------------------------------ */ }
    return (
        <>
            <div className="rescueContainer">
                <ResgatadorRepution
                    RESCUE_TIME={RESCUE_TIME}
                    FAVORITE_ONG={FAVORITE_ONG}
                    RESCUES_TOTAL={RESCUES_TOTAL}
                />
                <ResgatadorInformation
                    TEL={TEL}
                    CITY={CITY}
                    DESCRIPTION={DESCRIPTION}
                />;
            </div>
        </>
    )
}

const ResgatadorRepution = ({ FAVORITE_ONG, RESCUES_TOTAL, RESCUE_TIME }) => {
    return (
        <>
            <div className="rescueReputation flex">
                <div>
                    <p>Voluntario há</p>
                    {/* Trocar TEMPO DE RESGATE na VAR-RESCUE_TIME*/}
                    <span>{RESCUE_TIME}</span>
                </div>
                <div>
                    <p>Total de Resgates</p>
                    {/* Trocar QUANTIDADE DE RESGATE na VAR-RESCUES_TOTAL*/}
                    <span>{RESCUES_TOTAL}</span>
                </div>
                <div>
                    <p>Instituições preferidas</p>
                    <IconContext.Provider value={{ size: "22px" }}>
                        <BiBone className="rescueIcon" />
                    </IconContext.Provider>
                    <span>{FAVORITE_ONG}</span>
                    <IconContext.Provider value={{ size: "20px" }}>
                        <BiLinkExternal className="rescueIcon" />
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

{/* Trocar valore nas Vars*/ }
const ResgatadorInformation = ({ TEL, CITY, DESCRIPTION }) => {
    return (
        <>
            <div className="rescueInformation">
                <section>
                    <span>Sobre mim:</span>
                    <p>{DESCRIPTION}</p>
                </section>

                <div className="rescueDonate">
                    <div className="flex">
                        <p>Fazer uma <br />Doação</p>
                        <IconContext.Provider value={{ size: "29px" }}>
                            <FaRegMoneyBillAlt className="rescueIcon" />
                        </IconContext.Provider>
                    </div>
                </div>

                <section>
                    <span>Conquistas</span>
                    <div className="reAchivimentIcon flex">
                        <IconContext.Provider value={{ size: "22px" }}>
                            <div><BiLike /></div>
                            <div><TbDogBowl /></div>
                            <div><IoMdNotificationsOutline /></div>
                            <div><p>3+</p></div>
                        </IconContext.Provider>
                    </div>
                </section>

                <section className="">
                    <span>Redes Sociais</span>
                    <div className=" flex">
                        <IconContext.Provider value={{ size: "25px" }}>
                            <BsInstagram className="socialmedia" />
                        </IconContext.Provider>
                        <IconContext.Provider value={{ size: "29px" }}>
                            <AiOutlineFacebook className="socialmedia" />
                            <TbBrandTelegram className="socialmedia" />
                        </IconContext.Provider>
                    </div>
                </section>

                <section>
                    <span>Progressão de conquista</span>
                    <div className="flex">
                        <IconContext.Provider value={{ size: "20px" }}>
                            <div className="reAchivimentBorder">
                                <div><GiAchievement /></div>
                                <div><GiAchievement /></div>
                                <div><GiAchievement /></div>
                            </div>
                        </IconContext.Provider>
                    </div>
                </section>

                <section className="reinfoRight">
                    <div className="rereinfoRight flex">
                        <div className='rescueInfoIcons'><MdLocationOn /></div>
                        {CITY}
                    </div>
                    <div className="rereinfoRight flex">
                        <div className='rescueInfoIcons'><BsFillTelephoneFill /></div>
                        {TEL}
                    </div>
                </section>
            </div>
        </>
    )
}



const ResgatadorFavorites = () => {
    return (
        <>
            <div className='rescueFav'>
                <div className='favTitle'>
                    <p>Resgatadores Favoritos</p>
                    <div>
                        <span>Ver Todos</span>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <img src={id5_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id5_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id5_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id5_Profile} />
                        <p>@Gilmar</p>
                    </div>
                    <div>
                        <img src={id5_Profile} />
                        <p>@Gilmar</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const ResgatadorGallery = () => {
    return (
        <>
            <div className='rescueGallery'>
                <div className='favTitle'>
                    <p>Galeria</p>
                    <div>
                        <span>Ver Todos</span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='img1'>
                        <img src={id5_Profile} />
                    </div>
                    <div className='img2'>
                        <img src={id5_Profile} />
                    </div>
                </div>
            </div>
        </>
    )
}
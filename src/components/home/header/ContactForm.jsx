// @ts-nocheck
import { Link } from "react-router-dom";
import InputLabel from "../../UI/InputLabel";
import TextInput from "../../UI/TextInput";
import Textarea from "../../UI/Textarea";
import PrimaryButton from "../../UI/PrimaryButton";

export const ContuctForm = () => {
    const lastProjects = [
        { id: 1, name: "project", url: "#", img: "assets/images/projects/project-1.jpg" },
        { id: 2, name: "project", url: "#", img: "assets/images/projects/project-2.jpg" },
        { id: 3, name: "project", url: "#", img: "assets/images/projects/project-3.jpg" },
        { id: 4, name: "project", url: "#", img: "assets/images/projects/project-4.jpg" },
        { id: 5, name: "project", url: "#", img: "assets/images/projects/project-5.jpg" },
    ]
    
    return (
        <dialog id="my_modal_2" className="modal">
            <div dir="rtl" className="modal-box max-w-17/20 max-h-22/25 p-0 ltr:text-left rtl:text-right bg-white">
                <div className="card lg:card-side flex-col-reverse bg-primary-three shadow-sm">
                    <div className="card-body p-10 ltr:text-left">
                        <div className="w-full flex ltr:justify-end">
                            <figure className="logo w-36 h-auto">
                                <img
                                    src="/assets/images/logo-default.png"
                                    className="w-full h-full object-cover"
                                    alt="logo"
                                    loading="lazy" />
                            </figure>
                        </div>
                        <div className="my-4">
                            <p className="!mb-5">التنقيب مع السخط الصالحين والكراهية الرجال الذين يعانون من إعجابهم وإحباطهم من قبل لحظة متعة السحر حتى يرغبون في أن لا يستطيعوا التنبؤ بالألم والمشاكل.</p>
                            <Link to="#" arial-label="Read more" className="!text-dark-one font-bold font-spartan text-base uppercase">اقرأ المزيد</Link>
                        </div>
                        <hr className="text-dark-one/15" />
                        <div className="my-3">
                            <h3 className="text-xl">احدث المشاريع</h3>
                            <div className="flex items-center flex-wrap gap-3 ltr:justify-end">
                                {lastProjects.map((project) => (
                                    <Link key={project.id} to={project.url} arial-label="Projec" >
                                        <figure className="w-26 h-26">
                                            <img src={project.img} alt={project.name} className="w-full h-full rounded-lg object-cover" loading="lazy" />
                                        </figure>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <hr className="text-dark-one/15" />
                        <div className="mt-6 mb-3">
                            © 2023 كريوت. جميع الحقوق محفوظة.
                        </div>
                    </div>
                    <div className="card-body p-10 lg:w-3/5 drop-shadow-lg rounded-r-xl bg-white ltr:text-left">
                        <form>
                            <div>
                                <InputLabel htmlFor="name" className="uppercase rtl:!text-base" value="اسمك" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    className="block w-full !mt-1"
                                />
                            </div>
                            <div className="mt-3">
                                <InputLabel htmlFor="email" className="uppercase rtl:!text-base" value="اميلك" />
                                <TextInput
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block w-full !mt-1"
                                />
                            </div>
                            <div className="mt-3">
                                <InputLabel htmlFor="address" className="uppercase rtl:!text-base" value="العنوان" />
                                <TextInput
                                    id="address"
                                    name="address"
                                    className="block w-full !mt-1"
                                />
                            </div>
                            <div className="mt-3">
                                <InputLabel htmlFor="message" className="uppercase rtl:!text-base" value="رسالتك (اختياري)" />
                                <Textarea
                                    id="message"
                                    name="message"
                                    className="block w-full !mt-2"
                                >
                                </Textarea>
                            </div>
                        </form>
                        <div className="grid">
                            <PrimaryButton type="submit" disabled={false} className="hover:!bg-primary-one/95 hover:!text-white ltr:!uppercase">ارسال</PrimaryButton>
                        </div>
                    </div>
                </div>
                <form method="dialog">
                    <button aria-label="close" className="btn btn-sm btn-circle btn-ghost bg-primary-one text-white p-4 absolute right-2 top-2">✕</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop"><button></button></form>
        </dialog>
    );
}
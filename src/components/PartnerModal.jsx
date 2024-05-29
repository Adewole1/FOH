import PropTypes from "prop-types";
import Modal from "./Modal";
import { IoCloseOutline } from "react-icons/io5";

const PartnerModal = ({ show, setShow }) => {
  return (
    <Modal show={show} setShow={setShow}>
      <div className="flex flex-col gap-10 text-left text-white">
        <div className="w-full flex justify-end">
          <IoCloseOutline
            onClick={() => setShow(false)}
            className="text-white size-4"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-4xl">Partner With Us</p>
          <p>
            The Future of Health isn&apos;t just a platform; it&apos;s a
            movement—a collective of visionaries, disruptors, and advocates
            committed to redefining the very essence of healthcare.
          </p>
          <p>
            Picture a world where healthcare isn&apos;t a privilege, but a
            right. Where data doesn&apos;t just inform decisions, but drives
            them. Where the gap between patient and practitioner is bridged, not
            by distance, but by technology. This is the world we&apos;re working
            towards—a world where health is holistic, equitable, and empowering.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            placeholder="Full Name"
            className="bg-white border border-[#D0D5DD] px-[0.65rem] py-[0.875rem] rounded-md placeholder:text-[#667085] placeholder:text-sm focus-within:outline-none text-black font-medium"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-white border border-[#D0D5DD] px-[0.65rem] py-[0.875rem] rounded-md placeholder:text-[#667085] placeholder:text-sm focus-within:outline-none text-black font-medium"
          />
          <label htmlFor="agree" className="flex gap-2 items-start">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="rounded-full accent-primary mt-2"
            />
            <p>
              By filling this form, you agree to receive marketing
              communications from future of tech, including promotions, news and
              invites.
            </p>
          </label>
          <button className="bg-white text-black p-3 rounded-md flex items-center gap-2 font-semibold text-sm w-fit">
            Partner with us
          </button>
        </div>
      </div>
    </Modal>
  );
};

PartnerModal.propTypes = {
  setShow: PropTypes.func,
  show: PropTypes.bool,
};

export default PartnerModal;

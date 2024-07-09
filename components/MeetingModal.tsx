import React from "react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className: string;
  children: any;
  handleClick: () => void;
  buttonText: string;
  image: string;
  buttonIcon: string;
}
const MeetingModal = (props: MeetingModalProps) => {
  return <div>MeetingModal</div>;
};

export default MeetingModal;

import whatsappIcon from "@/assets/whatsapp-icon.png";

interface WhatsAppIconProps {
  className?: string;
}

const WhatsAppIcon = ({ className = "w-5 h-5" }: WhatsAppIconProps) => (
  <img src={whatsappIcon} alt="WhatsApp" className={`${className} object-contain`} />
);

export default WhatsAppIcon;

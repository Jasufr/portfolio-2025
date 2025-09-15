import { Link } from "react-router-dom";
import ShadowButton from "../atoms/ShadowButton";
import { useTranslation } from "react-i18next";

export default function ReachOut() {
  const { t } = useTranslation();

  return (
    <div className="text-center min-h-screen flex flex-col justify-center">
      <h2 className="font-semibold text-3xl mb-2">{t("reachOutTitle")}</h2>
      <p className="text-2xl text-orange @container">
        {t("reachOutSlogan")}
        <br className="hidden @min-[460px]:inline" />
        {t("reachOutSlogan2")}
      </p>
      <ShadowButton link={"/contact"} text={t("reachOutButton")} />
    </div>
  );
}

import {
  Inter,
  Italianno,
  Sora,
  Roboto_Mono,
  Roboto,
  Abhaya_Libre,
  DM_Sans,
  Poppins,
  Jost,
  Inria_Serif,
} from "next/font/google";


export const dm_sans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const inter = Inter({ subsets: ["latin"] });
export const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});
export const sora = Sora({ subsets: ["latin"] });
export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
export const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });
export const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "600"] });
export const inria_serif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
});

export const abhaya_libre = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

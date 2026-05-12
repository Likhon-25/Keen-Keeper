import Stats from "@/components/stats/Stats";

export const metadata = {
  title: "Dashboard Stats | KeenKeeper",
  description: "View your connection statistics, engagement metrics, and growth over time on KeenKeeper.",

  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "My Analytics - KeenKeeper",
    description: "Tracking my network growth and connection health.",
    images: [
      {
        url: "@/favicon.ico",
        width: 1200,
        height: 630,
        alt: "KeenKeeper Dashboard",
      },
    ],
  },
};


const StatsPage = () => {
 

  return (
    <Stats/>
  );
};

export default StatsPage;

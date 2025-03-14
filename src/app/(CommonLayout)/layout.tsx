import Footer from "@/components/share/Footer";
import Navbar from "@/components/share/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default CommonLayout;

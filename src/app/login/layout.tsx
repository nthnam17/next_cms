import '../globals.css';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-screen h-screen">
            <div className="bg_login w-full h-full">{children}</div>
        </div>
    );
}

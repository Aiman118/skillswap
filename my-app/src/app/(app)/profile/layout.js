import Progresstracker from '@/app/components/Progresstracker';

export default function Layout({ children }) {
  return (
    <div>
      {/* <Progresstracker /> */}
      <div className="p-5">{children}</div>
    </div>
  );
}

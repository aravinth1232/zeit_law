import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon, Home } from "lucide-react";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const segments = pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link to="/" className="hover:underline font-primary">
        <Home size={14} className="text-siteblack"/>
      </Link>

      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        return (
          <span key={path} className="flex items-center gap-1">
            <ChevronRightIcon size={16} />

            {isLast ? (
              <span className="capitalize text-gray-500 underline-effect-header">
                {segment.replace("-", " ")}
              </span>
            ) : (
              <Link to={path} className="capitalize font-primary">
                {segment.replace("-", " ")}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

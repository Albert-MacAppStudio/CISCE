import NavguideOverLay from "./NavGuideOverLay/NavGuideOverLay";
import { useNavGuideData } from "../../Context/Navigation/NavGuideProvider";
import { Fragment } from "react";
import brand from "../../Assets/Images/brand.png";
import "./Navigation.css";
import NavAccordion from "./NavAccordion/NavAccordion";
import NavGuide from "./NavGuide/NavGuide";
import { NavIcons } from "./NavIcons";
import NavigationLink from "./NavigationLink/NavigationLink";
const Navigation = (props) => {
  const { state, onClose } = props;

  const navItems = {
    intial: {
      title: "",
      body: [
        { name: "tasks", type: "link", variant: "with_icon" },
        { name: "notifications", type: "link", variant: "with_icon" },
        { name: "circulars", type: "link", variant: "with_icon" },
      ],
    },
    registration: {
      title: "e-registration",
      body: [
        { name: "dashboard", type: "link", variant: "with_icon" },

        {
          name: "ICSE",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [
            { name: "registration", type: "link" },
            { name: "confirmation of entry", type: "link" },
            {
              name: "correction of entries",
              type: "accordion",
              accordionBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "special difficulty requests",
              type: "accordion",
              accordionBody: [
                { name: "special difficulty request", type: "link" },
                { name: "special note", type: "link" },
                {
                  name: "special concession",
                  type: "link",
                },
              ],
            },
          ],
        },
        {
          name: "ISC",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "CVE",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "search",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "reports",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [
            {
              name: "center arrangement",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "examiner nomination",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "nomination of INS/SE/IA",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "internal assessment",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },

            {
              name: "exam conduction",
              type: "guide",
              guideBody: [
                { name: "indent list (horizontal)", type: "link" },
                { name: "indent list (vertical)", type: "link" },
                { name: "packing memo (summarized)", type: "link" },
                { name: "packing memo (detailed)", type: "link" },
                { name: "packing memo / 2D sticker variance", type: "link" },
                { name: "packing memo - print order", type: "link" },
                { name: "clashing of subjects (matrix)", type: "link" },
                { name: "clashing of subjects (tabular)", type: "link" },
                { name: "subject-wise school-wise candidates", type: "link" },
                { name: "script movements monitoring sheet", type: "link" },
                { name: "subject-wise totals", type: "link" },
                { name: "center-wise candidate status", type: "link" },
                { name: "center transfer requests status", type: "link" },
                { name: "time table", type: "link" },
                { name: "time table count", type: "link" },
                { name: "time table count excel list", type: "link" },
                { name: "convener letter of private candidates", type: "link" },
                { name: "answer script envelope requirement", type: "link" },
                {
                  name: "examination documents",
                  type: "accordion",
                  accordionBody: [
                    { name: "examination document summary", type: "link" },
                    { name: "admit card pending candidate list", type: "link" },
                  ],
                },
              ],
            },
            {
              name: "appointment",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "brundle management",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "evaluavtion",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "special difficulty",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "unfair means",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "exam center attendance",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "result processing",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "result publication",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "result analysis",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "recheck",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "compartmental exam",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "main weakness report",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "examiner remuneration",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "examination stationery",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "teachers database",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
            {
              name: "result processing",
              type: "guide",
              guideBody: [{ name: "dummy", type: "link" }],
            },
          ],
        },
        {
          name: "masters",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "payment review",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "settings",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "admin",
          type: "accordion",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
      ],
    },
    affliation: {
      title: "e-affiliation",
      body: [
        {
          name: "provisional affiliation requests",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "upgrade affiliation requests",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "permanent affiliation requests",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "provisional affiliation forms",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "upgrade affiliation forms",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "permanent affiliation forms",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "affiliated schools",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "graduations",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "payments",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "approval of periodic updates",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "list of affiliated schools",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "afiliation reports",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "subject addition",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "disaffiliated schools",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "periodic inspection",
          type: "link",
          variant: "with_icon",
        },
        {
          name: "inspectors",
          type: "link",
          variant: "with_icon",
        },
      ],
    },
    semester: {
      title: "semester-2",
      body: [
        { name: "dashboard", type: "link", variant: "with_icon" },
        {
          name: "admin",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "ICSE",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "ISC",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "reports",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
      ],
    },
    payment: {
      title: "payment reports",
      body: [
        { name: "all payments", type: "link", variant: "with_icon" },
        { name: "payments to be recieved", type: "link", variant: "with_icon" },
        { name: "payments by category", type: "link", variant: "with_icon" },
        { name: "school bank details", type: "link", variant: "with_icon" },
      ],
    },
    training: {
      title: "trainings",
      body: [
        {
          name: "training program",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "reports",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "my menu",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
      ],
    },
    recipt: {
      title: "recipt and despatch management",
      body: [
        { name: "despatch details", type: "link", variant: "with_icon" },
        {
          name: "report details",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
        {
          name: "admin",
          type: "accordion",
          variant: "with_icon",
          accordionBody: [{ name: "dummy", type: "link" }],
        },
      ],
    },
  };

  const { setGuideData, guideData } = useNavGuideData();
  const navItemKeys = Object.keys(navItems);

  // that uses "navItems" object to loop over and renders different types of components according "type" attribute

  const renderNavItems = (item, i, key) => {
    const NavIconKeys = Object.keys(NavIcons);
    const name = item?.name.replaceAll(" ", "_").toLowerCase();
    const path = key + " " + item?.name.replaceAll(" ", "-");

    const Icon =
      NavIcons[name] ??
      NavIcons[NavIconKeys?.find((key) => name.includes(key))];

    switch (item.type) {
      case "link":
        return <NavigationLink Icon={Icon} path={path} key={i} item={item} />;
      case "accordion":
        return (
          <NavAccordion Icon={Icon} path={path} key={i} title={item?.name}>
            {item?.accordionBody?.map((accItem, i) =>
              renderNavItems(accItem, i + 3, path)
            )}
          </NavAccordion>
        );
      case "guide":
        return (
          <NavGuide
            key={i}
            Icon={Icon}
            currentKey={key}
            title={item.name}
            body={item?.guideBody}
          />
        );
      default:
        return null;
    }
  };

  return (
    <aside
      className="sidebar"
      id={state ? "nav-active" : ""}
      style={guideData ? { width: "100%" } : {}}
      onClick={() => {
        onClose();
        console.log("clicked");
      }}
    >
      <nav className="sidebar-nav">
        <img src={brand} className="sidebar-nav-brand" loading="lazy" alt="" />
        <ul
          className="sidebar-nav-links"
          onClick={() => {
            setGuideData("");
          }}
        >
          {navItemKeys?.map((key, i) => {
            const title = navItems[key]["title"];
            const body = navItems[key]["body"];
            return (
              <Fragment key={i}>
                {title && (
                  <li className="sidebar-nav-link-segment-title">{title}</li>
                )}
                <ul className="sidebar-nav-link-segment-body">
                  {body?.map((item, i) => renderNavItems(item, i, title))}
                </ul>
              </Fragment>
            );
          })}
        </ul>
      </nav>
      <NavguideOverLay onClose={onClose} renderNavItems={renderNavItems} />
    </aside>
  );
};

export default Navigation;

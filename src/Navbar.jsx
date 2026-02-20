// ============================================================
// NAVBAR.JSX — Premium Animated Navbar for Portfolio
// ============================================================
// HOW IT WORKS (Simple Summary):
// 1. We have a list of nav links (NAV_LINKS)
// 2. Clicking a link → smoothly scrolls to that section
// 3. The clicked link stays underlined (active state)
// 4. As you scroll, the active link auto-updates
// 5. On mobile → hamburger menu slides in from the right
// ============================================================

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

// ─────────────────────────────────────────────────────────────
// NAV_LINKS — All navigation items
// Each item has:
//   label  → Text shown on screen ("Home", "Projects", etc.)
//   href   → The section ID to scroll to (matches <section id="home">)
//   color  → Unique color for this link when active/hovered
//   glow   → Glow shadow color (same color but transparent)
// ─────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home",         href: "home",         color: "#00d4aa", glow: "rgba(0,212,170,0.4)"   },
  { label: "Experience",   href: "experience",   color: "#a78bfa", glow: "rgba(167,139,250,0.4)" },
  { label: "Projects",     href: "projects",     color: "#38bdf8", glow: "rgba(56,189,248,0.4)"  },
  { label: "About",        href: "about",        color: "#fb923c", glow: "rgba(251,146,60,0.4)"  },
  { label: "Testimonials", href: "testimonials", color: "#f472b6", glow: "rgba(244,114,182,0.4)" },
];


// ─────────────────────────────────────────────────────────────
// NavLink — A single navigation link
//
// Props:
//   item   → one object from NAV_LINKS
//   active → the currently active link's href (e.g. "home")
//   onClick → function to call when this link is clicked
//
// KEY BEHAVIOR:
//   • If this link is "active" → underline stays visible
//   • If mouse hovers → underline appears temporarily
//   • Underline is a <span> with scaleX(0→1) CSS transition
// ─────────────────────────────────────────────────────────────
function NavLink({ item, active, onClick }) {
  // hovered = true when mouse is over this link
  const [hovered, setHovered] = useState(false);

  // Check if THIS link is the currently active one
  const isActive = active === item.href;

  // showUnderline = true when hovered OR when this is the active link
  const showUnderline = hovered || isActive;

  // handleClick: prevent page navigation, scroll smoothly, set active
  function handleClick(e) {
    e.preventDefault(); // ← IMPORTANT: stops browser from navigating to a new page

    // Find the section element by its ID (e.g. document.getElementById("home"))
    const section = document.getElementById(item.href);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // smooth scroll animation
        block: "start",     // scroll to top of section
      });
    }

    onClick(item.href); // tell parent which link was clicked → sets active state
  }

  return (
    <li>
      <a
        href={`#${item.href}`}        // still a valid anchor for accessibility
        onClick={handleClick}          // our custom click handler (smooth scroll)
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-current={isActive ? "page" : undefined} // accessibility
        style={{
          // Color changes when hovered or active
          color: showUnderline ? item.color : "#9ca3af",
          // Glow effect on text when active/hovered
          textShadow: showUnderline ? `0 0 14px ${item.glow}` : "none",
          transition: "color 300ms ease, text-shadow 300ms ease",
        }}
        className="relative inline-block text-sm font-semibold tracking-widest uppercase py-1 outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-sm"
      >
        {/* The link text */}
        {item.label}

        {/* ── ANIMATED UNDERLINE ──────────────────────────────
            This is a thin line below the text.
            • When hidden: scaleX(0) → line has 0 width (invisible)
            • When shown:  scaleX(1) → line has full width (visible)
            • transformOrigin: "left" → grows from left to right
            ─────────────────────────────────────────────────── */}
        <span
          style={{
            background: `linear-gradient(90deg, ${item.color}, transparent)`,
            transform: showUnderline ? "scaleX(1)" : "scaleX(0)", // show/hide
            boxShadow: showUnderline ? `0 0 8px ${item.glow}` : "none",
            transition: "transform 300ms ease, box-shadow 300ms ease",
            transformOrigin: "left", // grows from LEFT side
          }}
          className="absolute bottom-0 left-0 h-px w-full block"
        />
      </a>
    </li>
  );
}


// ─────────────────────────────────────────────────────────────
// ContactButton — The gradient "Contact" button on the right
//
// Uses Framer Motion to scale up slightly on hover.
// The gradient changes from dark teal to bright teal on hover.
// ─────────────────────────────────────────────────────────────
function ContactButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onClick) onClick("contact");
  }

  return (
    <motion.a
      href="contact"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Framer Motion: animates the scale property
      animate={{ scale: hovered ? 1.06 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      style={{
        // Gradient changes on hover (dark → bright)
        background: hovered
          ? "linear-gradient(135deg, #00d4aa 0%, #06b6d4 50%, #0ea5e9 100%)"
          : "linear-gradient(135deg, #008f72 0%, #0891b2 50%, #0369a1 100%)",
        // Glow appears on hover
        boxShadow: hovered
          ? "0 0 24px rgba(0,212,170,0.55), 0 4px 20px rgba(6,182,212,0.3)"
          : "0 2px 12px rgba(0,0,0,0.4)",
        transition: "background 300ms ease, box-shadow 300ms ease",
      }}
      className="px-5 py-2 rounded-full text-white text-sm font-bold tracking-widest uppercase cursor-pointer"
      aria-label="Contact me"
    >
      Contact
    </motion.a>
  );
}


// ─────────────────────────────────────────────────────────────
// Hamburger — The ☰ / ✕ button for mobile screens
//
// 3 horizontal bars that animate into an X shape when open.
// Uses Framer Motion to rotate and move each bar.
// ─────────────────────────────────────────────────────────────
function Hamburger({ open, toggle }) {
  return (
    <button
      onClick={toggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus-visible:ring-2 focus-visible:ring-teal-400 rounded-sm outline-none"
    >
      {/* Three bars: index 0 (top), 1 (middle), 2 (bottom) */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={
            open
              ? i === 0
                ? { rotate: 45, y: 8 }      // top bar → rotate 45° down
                : i === 1
                ? { opacity: 0, scaleX: 0 }  // middle bar → disappear
                : { rotate: -45, y: -8 }    // bottom bar → rotate -45° up
              : { rotate: 0, y: 0, opacity: 1, scaleX: 1 } // reset to ☰
          }
          transition={{ duration: 0.28, ease: "easeInOut" }}
          style={{ background: open ? "#00d4aa" : "#9ca3af" }} // teal when open
          className="block h-px w-6 rounded-full"
        />
      ))}
    </button>
  );
}


// ─────────────────────────────────────────────────────────────
// MobileMenu — Full-screen panel that slides in from the right
//
// Uses AnimatePresence so the exit animation plays when closing.
// Each link slides in with a staggered delay (0.07s apart).
// ─────────────────────────────────────────────────────────────
function MobileMenu({ open, active, onLinkClick, onClose }) {
  return (
    // AnimatePresence: needed to animate elements when they're REMOVED from DOM
    <AnimatePresence>
      {open && (
        <motion.nav
          key="mobile-menu"
          // Enter animation: slides in from right + fades in
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          // Exit animation: slides back out to right + fades out
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            background: "rgba(10,14,18,0.97)",
            backdropFilter: "blur(24px)",
          }}
          className="fixed inset-0 top-0 z-40 flex flex-col pt-24 px-10"
          aria-label="Mobile navigation"
        >
          {/* Decorative grid background (subtle lines) */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(0,212,170,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,170,.5) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Nav links list */}
          <ul className="flex flex-col gap-7 relative z-10">
            {NAV_LINKS.map((item, i) => (
              <motion.li
                key={item.href}
                // Each link slides in from right, with delay based on index
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
              >
                <a
                  href={`#${item.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(item.href);
                    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
                    onLinkClick(item.href); // set active
                    onClose();              // close the mobile menu
                  }}
                  style={{
                    // Active link gets its color + left border highlight
                    color: active === item.href ? item.color : "#9ca3af",
                    borderLeft: active === item.href
                      ? `2px solid ${item.color}`
                      : "2px solid transparent",
                    paddingLeft: "1rem",
                    transition: "color 300ms, border-color 300ms",
                  }}
                  className="text-2xl font-bold tracking-widest uppercase block"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Contact button at the bottom of mobile menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 relative z-10"
          >
            <ContactButton onClick={(id) => { onLinkClick(id); onClose(); }} />
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}


// ─────────────────────────────────────────────────────────────
// MAIN Navbar Component — The parent that controls everything
//
// STATE:
//   menuOpen → is the mobile hamburger menu open? (true/false)
//   active   → which section is currently active? (e.g. "home")
//   scrolled → has user scrolled more than 20px? (true/false)
//
// EFFECTS (useEffect):
//   1. Scroll detection → changes navbar background opacity
//   2. Resize detection → closes mobile menu on desktop
//   3. Body scroll lock → prevents background scroll when menu open
//   4. IntersectionObserver → auto-updates active link while scrolling
// ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive]     = useState("home"); // "home" is active by default
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll(); // Framer Motion scroll tracker

  // ── Effect 1: Detect scroll position ─────────────────────
  // When user scrolls more than 20px → set scrolled=true
  // This makes the navbar background darker/more opaque
  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 20));
  }, [scrollY]);

  // ── Effect 2: Close menu when screen gets wide ────────────
  // If user resizes window to desktop size → close mobile menu
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler); // cleanup
  }, []);

  // ── Effect 3: Lock background scroll when menu is open ───
  // Prevents the page from scrolling behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // ── Effect 4: IntersectionObserver — Auto-detect active section ──
  // As you SCROLL the page, this automatically updates which nav
  // link is "active" based on which section is visible on screen.
  //
  // rootMargin: "-40% 0px -55% 0px" means:
  //   A section becomes "active" only when it's in the middle of screen
  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.getElementById(l.href))
      .filter(Boolean); // filter out any null (section not found in DOM)

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When a section enters view → set it as active
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    // Cleanup: stop observing when component unmounts
    return () => observer.disconnect();
  }, []);


  return (
    <>
      {/* ══════════════════════════════════════════════════════
          MAIN NAVBAR BAR
          • Fixed at top of screen (position: fixed)
          • Background gets more opaque after scroll
          • Slides down on first load (Framer Motion)
          ══════════════════════════════════════════════════════ */}
      <motion.header
        // Entrance animation: slides down from above
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          // Background gets darker once user scrolls
          background: scrolled
            ? "rgba(11,15,20,0.92)"   // more opaque after scroll
            : "rgba(15,20,24,0.72)",  // slightly transparent at top
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          // Bottom border appears after scroll
          borderBottom: `1px solid rgba(0,212,170,${scrolled ? 0.15 : 0})`,
          transition: "background 300ms, border-color 400ms",
        }}
        className="fixed top-0 left-0 right-0 z-50 w-full"
        role="banner"
      >
        {/* Rainbow gradient line at very top of navbar */}
        <div
          style={{
            background: "linear-gradient(90deg, #00d4aa, #06b6d4, #a78bfa, #f472b6, #00d4aa)",
          }}
          className="absolute top-0 left-0 right-0 h-px opacity-60"
        />

        {/* Inner container: max-width + flex layout */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

          {/* ── LEFT: Brand / Logo ── */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              setActive("home");
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-teal-400 outline-none rounded-sm"
            aria-label="Go to home"
          >
            {/* Small square logo icon */}
            <span
              style={{
                background: "linear-gradient(135deg, #00d4aa, #06b6d4)",
                boxShadow: "0 0 14px rgba(0,212,170,0.45)",
              }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-black font-black text-sm"
            >
              ƒ
            </span>
            {/* Brand text in monospace style */}
            <span
              style={{ fontFamily: "'Courier New', monospace", letterSpacing: "0.12em" }}
              className="text-white font-bold text-lg"
            >
              <span style={{ color: "#00d4aa" }}>&lt;</span>
              folio
              <span style={{ color: "#00d4aa" }}>/&gt;</span>
            </span>
          </motion.a>

          {/* ── CENTER: Desktop Navigation Links ── */}
          {/* hidden md:block → hidden on mobile, visible on medium+ screens */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            aria-label="Primary navigation"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  active={active}                     // tells NavLink if it's active
                  onClick={(href) => setActive(href)} // updates active on click
                />
              ))}
            </ul>
          </motion.nav>

          {/* ── RIGHT: Contact Button + Hamburger ── */}
          <div className="flex items-center gap-4">
            {/* Contact button — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="hidden md:block"
            >
              <ContactButton onClick={(id) => setActive(id)} />
            </motion.div>

            {/* Hamburger button — mobile only */}
            <div className="md:hidden z-50 relative">
              <Hamburger
                open={menuOpen}
                toggle={() => setMenuOpen((prev) => !prev)} // flip true/false
              />
            </div>
          </div>

        </div>
      </motion.header>

      {/* ══════════════════════════════════════════════════════
          MOBILE MENU PANEL
          Slides in from the right on mobile
          ══════════════════════════════════════════════════════ */}
      <MobileMenu
        open={menuOpen}
        active={active}
        onLinkClick={(href) => setActive(href)}
        onClose={() => setMenuOpen(false)}
      />

      {/* Spacer: pushes page content below the fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
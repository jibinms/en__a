define("@widget/CONTACT/bs-Component-f5eaa0a0.js", ["exports", "~/c/bs-data-aids"], (function (e, t) { "use strict"; function a() { return "undefined" != typeof SDK && "VTX" in SDK ? new Date(14955489e5) : new Date } const l = [new Date(2017, 9, 1), new Date(2017, 9, 2), new Date(2017, 9, 3), new Date(2017, 9, 4), new Date(2017, 9, 5), new Date(2017, 9, 6), new Date(2017, 9, 7)], o = (e = "00:00", t = "en-US") => { const l = e.split(":"), o = parseInt(l[0], 10), c = parseInt(l[1], 10), r = a(); return r.setHours(o), r.setMinutes(c), r.toLocaleString(t, { hour: "2-digit", minute: "2-digit" }).toLowerCase() }; class c extends (global.React || guac.react).Component { constructor(e) { super(e), this.toggleHoursView = this.toggleHoursView.bind(this), this.getHourLabel = this.getHourLabel.bind(this), this.state = { collapsed: !0 } } toggleHoursView() { this.setState({ collapsed: !this.state.collapsed }) } getHourLabel(e) { const { staticContent: t, locale: a } = this.props; let l = ""; return l = e.closed ? t.closed : e.byAppointmentOnly ? t.byAppointment : `${o(e.openTime, a)} – ${o(e.closeTime, a)}`, l } render() { const { structuredHours: e, staticContent: o, locale: c, collapsible: r } = this.props, n = a().getDay(), g = { borderSpacing: 0, textAlign: "left", display: "inline-table" }, s = { display: "flex", marginTop: "xxsmall" }, i = { position: "relative", left: "xxsmall" }, u = 0 === n ? e.length - 1 : n - 1, { hour: d } = e[u] || {}; if (d && r && this.state.collapsed) { const e = d.closed || d.byAppointmentOnly ? `${o.today}` : `${o.openToday}`; return (global.React || guac.react).createElement("table", { style: g }, (global.React || guac.react).createElement("tr", { "data-aid": t.D.CONTACT_HOURS_COLLAPSED_REND, style: { cursor: "pointer" }, onClick: this.toggleHoursView }, (global.React || guac.react).createElement("td", { style: { paddingRight: "medium" } }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, { "data-aid": t.D.CONTACT_HOURS_COLLAPSED_LABEL }, e)), (global.React || guac.react).createElement("td", null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, { style: { whiteSpace: "nowrap", paddingLeft: "xxsmall" } }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, { "data-aid": t.D.CONTACT_HOURS_COLLAPSED_HR_LABEL, tag: "span" }, this.getHourLabel(d)))), (global.React || guac.react).createElement("td", null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, { "data-aid": t.D.CONTACT_HOURS_COLLAPSED_ARROW }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, { group: "Group", tag: "span", style: s }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, { icon: "chevronDown", size: "small", rotate: "0", style: i })))))) } return (global.React || guac.react).createElement("table", { style: g }, e.map((({ hour: e }, a) => { let o = (global._ || guac.lodash).noop, g = "auto", u = ""; r && 0 === a && (o = this.toggleHoursView, g = "pointer", u = (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, { "data-aid": t.D.CONTACT_HOURS_COLLAPSED_ARROW }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Link, { group: "Group", tag: "span", style: s }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Icon, { icon: "chevronDown", size: "small", rotate: "180", style: i })))); const d = this.getHourLabel(e), p = n === e.dayOfWeek ? "bold" : "normal"; return (global.React || guac.react).createElement("tr", { key: a, "data-aid": `${t.D.CONTACT_HOURS_DAY_REND}_${e.dayOfWeek}`, onClick: o, style: { cursor: g } }, (global.React || guac.react).createElement("td", { style: { paddingRight: "medium" } }, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, { style: { fontWeight: p, wordBreak: "normal" } }, ((e, t = "en-US") => l[e].toLocaleDateString(t, { weekday: "short" }))(e.dayOfWeek, c))), (global.React || guac.react).createElement("td", null, (global.React || guac.react).createElement((global.Core || guac["@wsb/guac-widget-core"]).UX2.Element.Text, { style: { fontWeight: p, whiteSpace: "nowrap", paddingLeft: "xxsmall" } }, d)), (global.React || guac.react).createElement("td", null, u)) }))) } } c.propTypes = { structuredHours: (global.PropTypes || guac["prop-types"]).array, staticContent: (global.PropTypes || guac["prop-types"]).object, locale: (global.PropTypes || guac["prop-types"]).string, collapsible: (global.PropTypes || guac["prop-types"]).bool }, e.default = c, Object.defineProperty(e, "__esModule", { value: !0 }) })), "undefined" != typeof window && (window.global = window);
//# sourceMappingURL=bs-Component-f5eaa0a0.js.map

/*
   Copyright 2018, Stefan Uebe

   Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
   documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
   rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to the following conditions:

   The above copyright notice and this permission notice shall be included in all copies or substantial portions
   of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
   WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
   COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
   OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*
This file contains a list of generated custom properties that might be used to style the FullCalendar.
Simply remove the comment, change the value and refresh the page.

Please be aware that this list may custom properties that are nonsense to change. That is due to the generic
nature of the list.

The names of the properties are created by the css class selectors (including pseudo-selectors) and the
css properties for which they set a value.

Examples:

.fc button .fc-icon {
    top: ...;
}

is targeted by --fc_button_fc-icon-top.


.fc .fc-row .fc-content-skeleton td {
    background: ...;
}

is targeted by custom property --fc_fc-row_fc-content-skeleton_td-background


.fc .fc-toolbar > * > :first-child {
    margin-left: ...;
}

is targeted by --fc_fc-toolbar__LACE_BRACE___ASTERISK___LACE_BRACE___COLON_first-child-margin-left


All the css properties have also a default value, so you simply can clean the list and keep the custom properties
that you need.

*/

const $_documentContainer = document.createElement('template');


$_documentContainer.innerHTML = `
<custom-style>
    <style>
        html{
            /*--a_SQUARE_BRACKET_OPEN_data-goto_SQUARE_BRACKET_CLOSE_-cursor: pointer !important;*/
            /*--a_SQUARE_BRACKET_OPEN_data-goto_SQUARE_BRACKET_CLOSE__COLON_hover-text-decoration: underline !important;*/
            /*--afc-more-cursor: pointer !important;*/
            /*--afc-more-font-size: 0.85em !important;*/
            /*--afc-more-margin: 1px 3px !important;*/
            /*--afc-more-text-decoration: none !important;*/
            /*--afc-more_COLON_hover-text-decoration: underline !important;*/
            /*--body_fc-font-size: var(--body_fc-font-size, 1em) !important;*/
            /*--fc-agenda-view_fc-day-grid-position: relative !important;*/
            /*--fc-agenda-view_fc-day-grid-z-index: 2 !important;*/
            /*--fc-agenda-view_fc-day-grid_fc-row-min-height: 3em !important;*/
            /*--fc-agenda-view_fc-day-grid_fc-row_fc-content-skeleton-padding-bottom: 1em !important;*/
            /*--fc-basic-view_fc-body_fc-row-min-height: 4em !important;*/
            /*--fc-basic-view_fc-day-number-padding: 2px !important;*/
            /*--fc-basic-view_fc-day-top_fc-week-number-background-color: rgb(242, 242, 242) !important;*/
            /*--fc-basic-view_fc-day-top_fc-week-number-color: grey !important;*/
            /*--fc-basic-view_fc-day-top_fc-week-number-min-width: 1.5em !important;*/
            /*--fc-basic-view_fc-day-top_fc-week-number-text-align: center !important;*/
            /*--fc-basic-view_fc-week-number-padding: 2px !important;*/
            /*--fc-basic-view_tdfc-week-number-text-align: center !important;*/
            /*--fc-basic-view_tdfc-week-number__LACE_BRACE___ASTERISK_-display: inline-block !important;*/
            /*--fc-basic-view_tdfc-week-number__LACE_BRACE___ASTERISK_-min-width: 1.25em !important;*/
            /*--fc-basic-view_thfc-day-number-padding: 0 2px !important;*/
            /*--fc-basic-view_thfc-week-number-padding: 0 2px !important;*/
            /*--fc-basicDay-view_fc-content-skeleton-padding-bottom: 1em !important;*/
            /*--fc-basicWeek-view_fc-content-skeleton-padding-bottom: 1em !important;*/
            /*--fc-bg-bottom: 0 !important;*/
            /*--fc-bg-left: 0 !important;*/
            /*--fc-bg-position: absolute !important;*/
            /*--fc-bg-right: 0 !important;*/
            /*--fc-bg-top: 0 !important;*/
            /*--fc-bg_table-height: 100% !important;*/
            /*--fc-bgevent-background: rgb(143, 223, 130) !important;*/
            /*--fc-bgevent-opacity: 0.3 !important;*/
            /*--fc-bgevent-skeleton-left: 0 !important;*/
            /*--fc-bgevent-skeleton-position: absolute !important;*/
            /*--fc-bgevent-skeleton-right: 0 !important;*/
            /*--fc-bgevent-skeleton-top: 0 !important;*/
            /*--fc-bootstrap3_fc-popover_panel-body-padding: 0 !important;*/
            /*--fc-bootstrap3_fc-time-grid_fc-slats_table-background: 0 0 !important;*/
            /*--fc-bootstrap3_fc-todayalert-border-radius: 0 !important;*/
            /*--fc-bootstrap3_hrfc-divider-border-color: inherit !important;*/
            /*--fc-bootstrap4_afc-event_COLON_not_R_BRACKET_OPEN__SQUARE_BRACKET_OPEN_href_SQUARE_BRACKET_CLOSE__R_BRACKET_CLOSE__COLON_not_R_BRACKET_OPEN__SQUARE_BRACKET_OPEN_tabindex_SQUARE_BRACKET_CLOSE__R_BRACKET_CLOSE_-color: rgb(255, 255, 255) !important;*/
            /*--fc-bootstrap4_fc-popover_card-body-padding: 0 !important;*/
            /*--fc-bootstrap4_fc-popovercard-position: absolute !important;*/
            /*--fc-bootstrap4_fc-time-grid_fc-slats_table-background: 0 0 !important;*/
            /*--fc-bootstrap4_fc-todayalert-border-radius: 0 !important;*/
            /*--fc-bootstrap4_hrfc-divider-border-color: inherit !important;*/
            /*--fc-button-group-display: inline-block !important;*/
            /*--fc-clear-clear: both !important;*/
            /*--fc-day-grid-event-margin: 1px 2px 0 !important;*/
            /*--fc-day-grid-event-padding: 0 1px !important;*/
            /*--fc-day-grid-event_fc-content-overflow: hidden !important;*/
            /*--fc-day-grid-event_fc-content-white-space: nowrap !important;*/
            /*--fc-day-grid-event_fc-time-font-weight: 700 !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-background: rgb(0, 0, 0) !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-bottom: -1px !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-content: "" !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-left: -1px !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-opacity: 0.25 !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-position: absolute !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-right: -1px !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-top: -1px !important;*/
            /*--fc-day-grid-eventfc-selected_COLON_after-z-index: 1 !important;*/
            /*--fc-day-grid_fc-row-z-index: 1 !important;*/
            /*--fc-day-topfc-other-month-opacity: 0.3 !important;*/
            /*--fc-direction: ltr !important;*/
            /*--fc-divider-border-style: solid !important;*/
            /*--fc-divider-border-width: 1px !important;*/
            /*--fc-event-background-color: rgb(58, 135, 173) !important;*/
            /*--fc-event-border: 1px solid rgb(58, 135, 173) !important;*/
            /*--fc-event-border-radius: 3px !important;*/
            /*--fc-event-color: rgb(255, 255, 255) !important;*/
            /*--fc-event-display: block !important;*/
            /*--fc-event-dot-background-color: rgb(58, 135, 173) !important;*/
            /*--fc-event-dot-border-radius: 5px !important;*/
            /*--fc-event-dot-display: inline-block !important;*/
            /*--fc-event-dot-height: 10px !important;*/
            /*--fc-event-dot-width: 10px !important;*/
            /*--fc-event-font-size: 0.85em !important;*/
            /*--fc-event-line-height: 1.3 !important;*/
            /*--fc-event-position: relative !important;*/
            /*--fc-event-text-decoration: none !important;*/
            /*--fc-event_COLON_hover-color: rgb(255, 255, 255) !important;*/
            /*--fc-event_COLON_hover-text-decoration: none !important;*/
            /*--fc-event_SQUARE_BRACKET_OPEN_href_SQUARE_BRACKET_CLOSE_-cursor: pointer !important;*/
            /*--fc-event_fc-bg-background: rgb(255, 255, 255) !important;*/
            /*--fc-event_fc-bg-opacity: 0.25 !important;*/
            /*--fc-event_fc-bg-z-index: 1 !important;*/
            /*--fc-event_fc-content-position: relative !important;*/
            /*--fc-event_fc-content-z-index: 2 !important;*/
            /*--fc-event_fc-resizer-display: none !important;*/
            /*--fc-event_fc-resizer-position: absolute !important;*/
            /*--fc-event_fc-resizer-z-index: 4 !important;*/
            /*--fc-eventfc-allow-mouse-resize_fc-resizer-display: block !important;*/
            /*--fc-eventfc-draggable-cursor: pointer !important;*/
            /*--fc-eventfc-selected-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2) !important;*/
            /*--fc-eventfc-selected-z-index: 9999 !important;*/
            /*--fc-eventfc-selected_fc-resizer-display: block !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-content: "" !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-height: 40px !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-left: 50% !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-margin-left: -20px !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-margin-top: -20px !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-position: absolute !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-top: 50% !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-width: 40px !important;*/
            /*--fc-eventfc-selected_fc-resizer_COLON_before-z-index: 9999 !important;*/
            /*--fc-eventfc-selectedfc-dragging-box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3) !important;*/
            /*--fc-h-eventfc-allow-mouse-resize_fc-resizer-bottom: -1px !important;*/
            /*--fc-h-eventfc-allow-mouse-resize_fc-resizer-top: -1px !important;*/
            /*--fc-h-eventfc-allow-mouse-resize_fc-resizer-width: 7px !important;*/
            /*--fc-h-eventfc-selected_COLON_before-bottom: -10px !important;*/
            /*--fc-h-eventfc-selected_COLON_before-content: "" !important;*/
            /*--fc-h-eventfc-selected_COLON_before-left: 0 !important;*/
            /*--fc-h-eventfc-selected_COLON_before-position: absolute !important;*/
            /*--fc-h-eventfc-selected_COLON_before-right: 0 !important;*/
            /*--fc-h-eventfc-selected_COLON_before-top: -10px !important;*/
            /*--fc-h-eventfc-selected_COLON_before-z-index: 3 !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-background: rgb(255, 255, 255) !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-border-color: inherit !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-border-radius: 4px !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-border-style: solid !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-border-width: 1px !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-height: 6px !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-margin-top: -4px !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-top: 50% !important;*/
            /*--fc-h-eventfc-selected_fc-resizer-width: 6px !important;*/
            /*--fc-helper-skeleton-left: 0 !important;*/
            /*--fc-helper-skeleton-position: absolute !important;*/
            /*--fc-helper-skeleton-right: 0 !important;*/
            /*--fc-helper-skeleton-top: 0 !important;*/
            /*--fc-highlight-background: rgb(188, 232, 241) !important;*/
            /*--fc-highlight-opacity: 0.3 !important;*/
            /*--fc-highlight-skeleton-left: 0 !important;*/
            /*--fc-highlight-skeleton-position: absolute !important;*/
            /*--fc-highlight-skeleton-right: 0 !important;*/
            /*--fc-highlight-skeleton-top: 0 !important;*/
            /*--fc-icon--khtml-user-select: none !important;*/
            /*--fc-icon--moz-user-select: none !important;*/
            /*--fc-icon--ms-user-select: none !important;*/
            /*--fc-icon--webkit-touch-callout: none !important;*/
            /*--fc-icon--webkit-user-select: none !important;*/
            /*--fc-icon-display: inline-block !important;*/
            /*--fc-icon-down-triangle_COLON_after-content: "▼" !important;*/
            /*--fc-icon-down-triangle_COLON_after-font-size: 125% !important;*/
            /*--fc-icon-down-triangle_COLON_after-top: 2% !important;*/
            /*--fc-icon-font-family: "Courier New", Courier, monospace !important;*/
            /*--fc-icon-font-size: 1em !important;*/
            /*--fc-icon-height: 1em !important;*/
            /*--fc-icon-left-double-arrow_COLON_after-content: "«" !important;*/
            /*--fc-icon-left-double-arrow_COLON_after-font-size: 160% !important;*/
            /*--fc-icon-left-double-arrow_COLON_after-top: -7% !important;*/
            /*--fc-icon-left-single-arrow_COLON_after-content: "‹" !important;*/
            /*--fc-icon-left-single-arrow_COLON_after-font-size: 200% !important;*/
            /*--fc-icon-left-single-arrow_COLON_after-font-weight: 700 !important;*/
            /*--fc-icon-left-single-arrow_COLON_after-top: -7% !important;*/
            /*--fc-icon-left-triangle_COLON_after-content: "◄" !important;*/
            /*--fc-icon-left-triangle_COLON_after-font-size: 125% !important;*/
            /*--fc-icon-left-triangle_COLON_after-top: 3% !important;*/
            /*--fc-icon-line-height: 1em !important;*/
            /*--fc-icon-overflow: hidden !important;*/
            /*--fc-icon-right-double-arrow_COLON_after-content: "»" !important;*/
            /*--fc-icon-right-double-arrow_COLON_after-font-size: 160% !important;*/
            /*--fc-icon-right-double-arrow_COLON_after-top: -7% !important;*/
            /*--fc-icon-right-single-arrow_COLON_after-content: "›" !important;*/
            /*--fc-icon-right-single-arrow_COLON_after-font-size: 200% !important;*/
            /*--fc-icon-right-single-arrow_COLON_after-font-weight: 700 !important;*/
            /*--fc-icon-right-single-arrow_COLON_after-top: -7% !important;*/
            /*--fc-icon-right-triangle_COLON_after-content: "►" !important;*/
            /*--fc-icon-right-triangle_COLON_after-font-size: 125% !important;*/
            /*--fc-icon-right-triangle_COLON_after-top: 3% !important;*/
            /*--fc-icon-text-align: center !important;*/
            /*--fc-icon-user-select: none !important;*/
            /*--fc-icon-x_COLON_after-content: "×" !important;*/
            /*--fc-icon-x_COLON_after-font-size: 200% !important;*/
            /*--fc-icon-x_COLON_after-top: 6% !important;*/
            /*--fc-icon_COLON_after-position: relative !important;*/
            /*--fc-limited-display: none !important;*/
            /*--fc-list-empty-display: table-cell !important;*/
            /*--fc-list-empty-text-align: center !important;*/
            /*--fc-list-empty-vertical-align: middle !important;*/
            /*--fc-list-empty-wrap1-display: table !important;*/
            /*--fc-list-empty-wrap1-height: 100% !important;*/
            /*--fc-list-empty-wrap1-width: 100% !important;*/
            /*--fc-list-empty-wrap2-bottom: 0 !important;*/
            /*--fc-list-empty-wrap2-left: 0 !important;*/
            /*--fc-list-empty-wrap2-position: absolute !important;*/
            /*--fc-list-empty-wrap2-right: 0 !important;*/
            /*--fc-list-empty-wrap2-top: 0 !important;*/
            /*--fc-list-heading-border-bottom-width: 1px !important;*/
            /*--fc-list-heading_td-font-weight: 700 !important;*/
            /*--fc-list-item-marker-white-space: nowrap !important;*/
            /*--fc-list-item-marker-width: 1px !important;*/
            /*--fc-list-item-time-white-space: nowrap !important;*/
            /*--fc-list-item-time-width: 1px !important;*/
            /*--fc-list-item-title_a-color: inherit !important;*/
            /*--fc-list-item-title_a-text-decoration: none !important;*/
            /*--fc-list-item-title_a_SQUARE_BRACKET_OPEN_href_SQUARE_BRACKET_CLOSE__COLON_hover-text-decoration: underline !important;*/
            /*--fc-list-itemfc-has-url-cursor: pointer !important;*/
            /*--fc-list-table_td-border-width: 1px 0 0 !important;*/
            /*--fc-list-table_td-padding: 8px 14px !important;*/
            /*--fc-list-table_tr_COLON_first-child_td-border-top-width: 0 !important;*/
            /*--fc-list-view-border-style: solid !important;*/
            /*--fc-list-view-border-width: 1px !important;*/
            /*--fc-ltr_fc-axis-text-align: right !important;*/
            /*--fc-ltr_fc-basic-view_fc-day-top_fc-day-number-float: right !important;*/
            /*--fc-ltr_fc-basic-view_fc-day-top_fc-week-number-border-radius: 0 0 3px !important;*/
            /*--fc-ltr_fc-basic-view_fc-day-top_fc-week-number-float: left !important;*/
            /*--fc-ltr_fc-day-grid-eventfc-allow-mouse-resize_fc-end-resizer-margin-right: -2px !important;*/
            /*--fc-ltr_fc-day-grid-eventfc-allow-mouse-resize_fc-start-resizer-margin-left: -2px !important;*/
            /*--fc-ltr_fc-h-event_fc-end-resizer-cursor: e-resize !important;*/
            /*--fc-ltr_fc-h-event_fc-end-resizer-right: -1px !important;*/
            /*--fc-ltr_fc-h-event_fc-start-resizer-cursor: w-resize !important;*/
            /*--fc-ltr_fc-h-event_fc-start-resizer-left: -1px !important;*/
            /*--fc-ltr_fc-h-eventfc-not-end-border-bottom-right-radius: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-end-border-right-width: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-end-border-top-right-radius: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-end-margin-right: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-end-padding-right: 1px !important;*/
            /*--fc-ltr_fc-h-eventfc-not-start-border-bottom-left-radius: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-start-border-left-width: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-start-border-top-left-radius: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-start-margin-left: 0 !important;*/
            /*--fc-ltr_fc-h-eventfc-not-start-padding-left: 1px !important;*/
            /*--fc-ltr_fc-h-eventfc-selected_fc-end-resizer-margin-right: -4px !important;*/
            /*--fc-ltr_fc-h-eventfc-selected_fc-start-resizer-margin-left: -4px !important;*/
            /*--fc-ltr_fc-list-heading-alt-float: right !important;*/
            /*--fc-ltr_fc-list-heading-main-float: left !important;*/
            /*--fc-ltr_fc-list-item-marker-padding-right: 0 !important;*/
            /*--fc-ltr_fc-popover_fc-header_fc-close-float: right !important;*/
            /*--fc-ltr_fc-popover_fc-header_fc-title-float: left !important;*/
            /*--fc-ltr_fc-time-grid_fc-event-container-margin: 0 2.5% 0 2px !important;*/
            /*--fc-ltr_fc-time-grid_fc-now-indicator-arrow-border-bottom-color: transparent !important;*/
            /*--fc-ltr_fc-time-grid_fc-now-indicator-arrow-border-top-color: transparent !important;*/
            /*--fc-ltr_fc-time-grid_fc-now-indicator-arrow-border-width: 5px 0 5px 6px !important;*/
            /*--fc-ltr_fc-time-grid_fc-now-indicator-arrow-left: 0 !important;*/
            /*--fc-more-popover-width: 220px !important;*/
            /*--fc-more-popover-z-index: 2 !important;*/
            /*--fc-more-popover_fc-event-container-padding: 10px !important;*/
            /*--fc-nonbusiness-background: rgb(215, 215, 215) !important;*/
            /*--fc-not-allowed-cursor: not-allowed !important;*/
            /*--fc-not-allowed_fc-event-cursor: not-allowed !important;*/
            /*--fc-now-indicator-border: 0 solid red !important;*/
            /*--fc-now-indicator-position: absolute !important;*/
            /*--fc-popover-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15) !important;*/
            /*--fc-popover-position: absolute !important;*/
            /*--fc-popover__LACE_BRACE__ui-widget-header__PLUS__ui-widget-content-border-top: 0 !important;*/
            /*--fc-popover_fc-header-padding: 2px 4px !important;*/
            /*--fc-popover_fc-header_fc-close-cursor: pointer !important;*/
            /*--fc-popover_fc-header_fc-title-margin: 0 2px !important;*/
            /*--fc-row-position: relative !important;*/
            /*--fc-row_COLON_first-child_table-border-top: 0 hidden transparent !important;*/
            /*--fc-row_fc-bg-z-index: 1 !important;*/
            /*--fc-row_fc-bgevent-skeleton-bottom: 0 !important;*/
            /*--fc-row_fc-bgevent-skeleton-z-index: 2 !important;*/
            /*--fc-row_fc-bgevent-skeleton_table-height: 100% !important;*/
            /*--fc-row_fc-bgevent-skeleton_td-border-color: transparent !important;*/
            /*--fc-row_fc-content-skeleton-padding-bottom: 2px !important;*/
            /*--fc-row_fc-content-skeleton-position: relative !important;*/
            /*--fc-row_fc-content-skeleton-z-index: 4 !important;*/
            /*--fc-row_fc-content-skeleton_tbody_td-border-top: 0 !important;*/
            /*--fc-row_fc-content-skeleton_td-border-bottom: 0 !important;*/
            /*--fc-row_fc-helper-skeleton-z-index: 5 !important;*/
            /*--fc-row_fc-helper-skeleton_tbody_td-border-top: 0 !important;*/
            /*--fc-row_fc-helper-skeleton_td-border-bottom: 0 !important;*/
            /*--fc-row_fc-highlight-skeleton-bottom: 0 !important;*/
            /*--fc-row_fc-highlight-skeleton-z-index: 3 !important;*/
            /*--fc-row_fc-highlight-skeleton_table-height: 100% !important;*/
            /*--fc-row_fc-highlight-skeleton_td-border-color: transparent !important;*/
            /*--fc-row_table-border-bottom: 0 hidden transparent !important;*/
            /*--fc-row_table-border-left: 0 hidden transparent !important;*/
            /*--fc-row_table-border-right: 0 hidden transparent !important;*/
            /*--fc-rowfc-rigid-overflow: hidden !important;*/
            /*--fc-rowfc-rigid_fc-content-skeleton-left: 0 !important;*/
            /*--fc-rowfc-rigid_fc-content-skeleton-position: absolute !important;*/
            /*--fc-rowfc-rigid_fc-content-skeleton-right: 0 !important;*/
            /*--fc-rowfc-rigid_fc-content-skeleton-top: 0 !important;*/
            /*--fc-rtl-text-align: right !important;*/
            /*--fc-rtl_fc-axis-text-align: left !important;*/
            /*--fc-rtl_fc-basic-view_fc-day-top_fc-day-number-float: left !important;*/
            /*--fc-rtl_fc-basic-view_fc-day-top_fc-week-number-border-radius: 0 0 0 3px !important;*/
            /*--fc-rtl_fc-basic-view_fc-day-top_fc-week-number-float: right !important;*/
            /*--fc-rtl_fc-day-grid-eventfc-allow-mouse-resize_fc-end-resizer-margin-left: -2px !important;*/
            /*--fc-rtl_fc-day-grid-eventfc-allow-mouse-resize_fc-start-resizer-margin-right: -2px !important;*/
            /*--fc-rtl_fc-h-event_fc-end-resizer-cursor: w-resize !important;*/
            /*--fc-rtl_fc-h-event_fc-end-resizer-left: -1px !important;*/
            /*--fc-rtl_fc-h-event_fc-start-resizer-cursor: e-resize !important;*/
            /*--fc-rtl_fc-h-event_fc-start-resizer-right: -1px !important;*/
            /*--fc-rtl_fc-h-eventfc-not-end-border-bottom-left-radius: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-end-border-left-width: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-end-border-top-left-radius: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-end-margin-left: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-end-padding-left: 1px !important;*/
            /*--fc-rtl_fc-h-eventfc-not-start-border-bottom-right-radius: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-start-border-right-width: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-start-border-top-right-radius: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-start-margin-right: 0 !important;*/
            /*--fc-rtl_fc-h-eventfc-not-start-padding-right: 1px !important;*/
            /*--fc-rtl_fc-h-eventfc-selected_fc-end-resizer-margin-left: -4px !important;*/
            /*--fc-rtl_fc-h-eventfc-selected_fc-start-resizer-margin-right: -4px !important;*/
            /*--fc-rtl_fc-list-heading-alt-float: left !important;*/
            /*--fc-rtl_fc-list-heading-main-float: right !important;*/
            /*--fc-rtl_fc-list-item-marker-padding-left: 0 !important;*/
            /*--fc-rtl_fc-list-view-direction: rtl !important;*/
            /*--fc-rtl_fc-popover_fc-header_fc-close-float: left !important;*/
            /*--fc-rtl_fc-popover_fc-header_fc-title-float: right !important;*/
            /*--fc-rtl_fc-time-grid_fc-event-container-margin: 0 2px 0 2.5% !important;*/
            /*--fc-rtl_fc-time-grid_fc-now-indicator-arrow-border-bottom-color: transparent !important;*/
            /*--fc-rtl_fc-time-grid_fc-now-indicator-arrow-border-top-color: transparent !important;*/
            /*--fc-rtl_fc-time-grid_fc-now-indicator-arrow-border-width: 5px 6px 5px 0 !important;*/
            /*--fc-rtl_fc-time-grid_fc-now-indicator-arrow-right: 0 !important;*/
            /*--fc-scroller--webkit-overflow-scrolling: touch !important;*/
            /*--fc-scroller__LACE_BRACE__fc-day-grid-position: relative !important;*/
            /*--fc-scroller__LACE_BRACE__fc-day-grid-width: 100% !important;*/
            /*--fc-scroller__LACE_BRACE__fc-time-grid-position: relative !important;*/
            /*--fc-scroller__LACE_BRACE__fc-time-grid-width: 100% !important;*/
            /*--fc-state-active-background-color: rgb(230, 230, 230) !important;*/
            /*--fc-state-active-background-image: none !important;*/
            /*--fc-state-active-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05) !important;*/
            /*--fc-state-active-color: rgb(51, 51, 51) !important;*/
            /*--fc-state-default-background-color: rgb(245, 245, 245) !important;*/
            /*--fc-state-default-background-image: linear-gradient(to bottom, rgb(255, 255, 255), rgb(230, 230, 230)) !important;*/
            /*--fc-state-default-background-image--moz-linear-gradient: -moz-linear-gradient(top, rgb(255, 255, 255), rgb(230, 230, 230)) !important;*/
            /*--fc-state-default-background-image--o-linear-gradient: -o-linear-gradient(top, rgb(255, 255, 255), rgb(230, 230, 230)) !important;*/
            /*--fc-state-default-background-image--webkit-gradient: -webkit-gradient(linear, 0 0, 0 100%, from(rgb(255, 255, 255)), to(rgb(230, 230, 230))) !important;*/
            /*--fc-state-default-background-image--webkit-linear-gradient: -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(230, 230, 230)) !important;*/
            /*--fc-state-default-background-repeat: repeat-x !important;*/
            /*--fc-state-default-border: 1px solid !important;*/
            /*--fc-state-default-border-color: rgb(230, 230, 230) rgb(230, 230, 230) rgb(191, 191, 191) !important;*/
            /*--fc-state-default-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05) !important;*/
            /*--fc-state-default-color: rgb(51, 51, 51) !important;*/
            /*--fc-state-default-text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75) !important;*/
            /*--fc-state-defaultfc-corner-left-border-bottom-left-radius: 4px !important;*/
            /*--fc-state-defaultfc-corner-left-border-top-left-radius: 4px !important;*/
            /*--fc-state-defaultfc-corner-right-border-bottom-right-radius: 4px !important;*/
            /*--fc-state-defaultfc-corner-right-border-top-right-radius: 4px !important;*/
            /*--fc-state-disabled-background-color: rgb(230, 230, 230) !important;*/
            /*--fc-state-disabled-background-image: none !important;*/
            /*--fc-state-disabled-box-shadow: none !important;*/
            /*--fc-state-disabled-color: rgb(51, 51, 51) !important;*/
            /*--fc-state-disabled-cursor: default !important;*/
            /*--fc-state-disabled-opacity: 0.65 !important;*/
            /*--fc-state-down-background-color: rgb(230, 230, 230) !important;*/
            /*--fc-state-down-background-image: none !important;*/
            /*--fc-state-down-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05) !important;*/
            /*--fc-state-down-color: rgb(51, 51, 51) !important;*/
            /*--fc-state-hover--moz-transition: background-position 0.1s linear !important;*/
            /*--fc-state-hover--o-transition: background-position 0.1s linear !important;*/
            /*--fc-state-hover--webkit-transition: background-position 0.1s linear !important;*/
            /*--fc-state-hover-background-color: rgb(230, 230, 230) !important;*/
            /*--fc-state-hover-background-position: 0 -15px !important;*/
            /*--fc-state-hover-color: rgb(51, 51, 51) !important;*/
            /*--fc-state-hover-text-decoration: none !important;*/
            /*--fc-state-hover-transition: background-position 0.1s linear !important;*/
            /*--fc-text-align: left !important;*/
            /*--fc-time-grid-container-position: relative !important;*/
            /*--fc-time-grid-container-z-index: 1 !important;*/
            /*--fc-time-grid-event-overflow: hidden !important;*/
            /*--fc-time-grid-event_fc-content-overflow: hidden !important;*/
            /*--fc-time-grid-event_fc-time-font-size: 0.85em !important;*/
            /*--fc-time-grid-event_fc-time-padding: 0 1px !important;*/
            /*--fc-time-grid-event_fc-time-white-space: nowrap !important;*/
            /*--fc-time-grid-event_fc-title-padding: 0 1px !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-bottom: 0 !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-cursor: s-resize !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-font-family: monospace !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-font-size: 11px !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-height: 8px !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-left: 0 !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-line-height: 8px !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-overflow: hidden !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-right: 0 !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer-text-align: center !important;*/
            /*--fc-time-grid-eventfc-allow-mouse-resize_fc-resizer_COLON_after-content: "=" !important;*/
            /*--fc-time-grid-eventfc-selected-overflow: visible !important;*/
            /*--fc-time-grid-eventfc-selected_fc-bg-display: none !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-background: rgb(255, 255, 255) !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-border-color: inherit !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-border-radius: 5px !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-border-style: solid !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-border-width: 1px !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-bottom: -5px !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-height: 8px !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-left: 50% !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-margin-left: -5px !important;*/
            /*--fc-time-grid-eventfc-selected_fc-resizer-width: 8px !important;*/
            /*--fc-time-grid-eventfc-short_fc-content-white-space: nowrap !important;*/
            /*--fc-time-grid-eventfc-short_fc-time-display: inline-block !important;*/
            /*--fc-time-grid-eventfc-short_fc-time-vertical-align: top !important;*/
            /*--fc-time-grid-eventfc-short_fc-time_COLON_after-content: " - " !important;*/
            /*--fc-time-grid-eventfc-short_fc-time_COLON_before-content: attr(data-start) !important;*/
            /*--fc-time-grid-eventfc-short_fc-time_span-display: none !important;*/
            /*--fc-time-grid-eventfc-short_fc-title-display: inline-block !important;*/
            /*--fc-time-grid-eventfc-short_fc-title-font-size: 0.85em !important;*/
            /*--fc-time-grid-eventfc-short_fc-title-padding: 0 !important;*/
            /*--fc-time-grid-eventfc-short_fc-title-vertical-align: top !important;*/
            /*--fc-time-grid-min-height: 100% !important;*/
            /*--fc-time-grid-position: relative !important;*/
            /*--fc-time-grid-z-index: 1 !important;*/
            /*--fc-time-grid__LACE_BRACE__fc-bg-z-index: 1 !important;*/
            /*--fc-time-grid__LACE_BRACE__hr-position: relative !important;*/
            /*--fc-time-grid__LACE_BRACE__hr-z-index: 2 !important;*/
            /*--fc-time-grid_fc-bgevent-container-position: relative !important;*/
            /*--fc-time-grid_fc-bgevent-container-z-index: 2 !important;*/
            /*--fc-time-grid_fc-bgevent-left: 0 !important;*/
            /*--fc-time-grid_fc-bgevent-position: absolute !important;*/
            /*--fc-time-grid_fc-bgevent-right: 0 !important;*/
            /*--fc-time-grid_fc-bgevent-z-index: 1 !important;*/
            /*--fc-time-grid_fc-business-container-position: relative !important;*/
            /*--fc-time-grid_fc-business-container-z-index: 1 !important;*/
            /*--fc-time-grid_fc-content-col-position: relative !important;*/
            /*--fc-time-grid_fc-content-skeleton-left: 0 !important;*/
            /*--fc-time-grid_fc-content-skeleton-position: absolute !important;*/
            /*--fc-time-grid_fc-content-skeleton-right: 0 !important;*/
            /*--fc-time-grid_fc-content-skeleton-top: 0 !important;*/
            /*--fc-time-grid_fc-content-skeleton-z-index: 3 !important;*/
            /*--fc-time-grid_fc-event-container-position: relative !important;*/
            /*--fc-time-grid_fc-event-container-z-index: 4 !important;*/
            /*--fc-time-grid_fc-event-position: absolute !important;*/
            /*--fc-time-grid_fc-event-z-index: 1 !important;*/
            /*--fc-time-grid_fc-helper-container-position: relative !important;*/
            /*--fc-time-grid_fc-helper-container-z-index: 6 !important;*/
            /*--fc-time-grid_fc-highlight-container-position: relative !important;*/
            /*--fc-time-grid_fc-highlight-container-z-index: 3 !important;*/
            /*--fc-time-grid_fc-highlight-left: 0 !important;*/
            /*--fc-time-grid_fc-highlight-position: absolute !important;*/
            /*--fc-time-grid_fc-highlight-right: 0 !important;*/
            /*--fc-time-grid_fc-now-indicator-arrow-margin-top: -5px !important;*/
            /*--fc-time-grid_fc-now-indicator-line-border-top-width: 1px !important;*/
            /*--fc-time-grid_fc-now-indicator-line-left: 0 !important;*/
            /*--fc-time-grid_fc-now-indicator-line-right: 0 !important;*/
            /*--fc-time-grid_fc-now-indicator-line-z-index: 5 !important;*/
            /*--fc-time-grid_fc-slats-position: relative !important;*/
            /*--fc-time-grid_fc-slats-z-index: 2 !important;*/
            /*--fc-time-grid_fc-slats_fc-minor_td-border-top-style: dotted !important;*/
            /*--fc-time-grid_fc-slats_td-border-bottom: 0 !important;*/
            /*--fc-time-grid_fc-slats_td-height: 1.5em !important;*/
            /*--fc-time-grid_fc-slats_ui-widget-content-background: 0 0 !important;*/
            /*--fc-time-grid_table-border: 0 hidden transparent !important;*/
            /*--fc-toolbar-text-align: center !important;*/
            /*--fc-toolbar_button-position: relative !important;*/
            /*--fc-toolbar_button_COLON_focus-z-index: 5 !important;*/
            /*--fc-toolbar_fc-center-display: inline-block !important;*/
            /*--fc-toolbar_fc-left-float: left !important;*/
            /*--fc-toolbar_fc-right-float: right !important;*/
            /*--fc-toolbar_fc-state-active-z-index: 4 !important;*/
            /*--fc-toolbar_fc-state-down-z-index: 3 !important;*/
            /*--fc-toolbar_fc-state-hover-z-index: 2 !important;*/
            /*--fc-toolbar_h2-margin: 0 !important;*/
            /*--fc-toolbar_ui-state-active-z-index: 4 !important;*/
            /*--fc-toolbar_ui-state-hover-z-index: 2 !important;*/
            /*--fc-toolbarfc-footer-toolbar-margin-top: 1em !important;*/
            /*--fc-toolbarfc-header-toolbar-margin-bottom: 1em !important;*/
            /*--fc-unselectable--khtml-user-select: none !important;*/
            /*--fc-unselectable--moz-user-select: none !important;*/
            /*--fc-unselectable--ms-user-select: none !important;*/
            /*--fc-unselectable--webkit-tap-highlight-color: transparent !important;*/
            /*--fc-unselectable--webkit-touch-callout: none !important;*/
            /*--fc-unselectable--webkit-user-select: none !important;*/
            /*--fc-unselectable-user-select: none !important;*/
            /*--fc-unthemed_fc-content-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_fc-disabled-day-background: rgb(215, 215, 215) !important;*/
            /*--fc-unthemed_fc-disabled-day-opacity: 0.3 !important;*/
            /*--fc-unthemed_fc-divider-background: rgb(238, 238, 238) !important;*/
            /*--fc-unthemed_fc-divider-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_fc-list-empty-background-color: rgb(238, 238, 238) !important;*/
            /*--fc-unthemed_fc-list-heading_td-background: rgb(238, 238, 238) !important;*/
            /*--fc-unthemed_fc-list-heading_td-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_fc-list-item_COLON_hover_td-background-color: rgb(245, 245, 245) !important;*/
            /*--fc-unthemed_fc-list-view-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_fc-popover-background-color: rgb(255, 255, 255) !important;*/
            /*--fc-unthemed_fc-popover-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_fc-popover-border-style: solid !important;*/
            /*--fc-unthemed_fc-popover-border-width: 1px !important;*/
            /*--fc-unthemed_fc-popover_fc-header-background: rgb(238, 238, 238) !important;*/
            /*--fc-unthemed_fc-popover_fc-header_fc-close-color: rgb(102, 102, 102) !important;*/
            /*--fc-unthemed_fc-popover_fc-header_fc-close-font-size: 0.9em !important;*/
            /*--fc-unthemed_fc-popover_fc-header_fc-close-margin-top: 2px !important;*/
            /*--fc-unthemed_fc-row-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_tbody-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_td-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_tdfc-today-background: rgb(252, 248, 227) !important;*/
            /*--fc-unthemed_th-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-unthemed_thead-border-color: rgb(221, 221, 221) !important;*/
            /*--fc-v-eventfc-not-end-border-bottom-left-radius: 0 !important;*/
            /*--fc-v-eventfc-not-end-border-bottom-right-radius: 0 !important;*/
            /*--fc-v-eventfc-not-end-border-bottom-width: 0 !important;*/
            /*--fc-v-eventfc-not-end-padding-bottom: 1px !important;*/
            /*--fc-v-eventfc-not-start-border-top-left-radius: 0 !important;*/
            /*--fc-v-eventfc-not-start-border-top-right-radius: 0 !important;*/
            /*--fc-v-eventfc-not-start-border-top-width: 0 !important;*/
            /*--fc-v-eventfc-not-start-padding-top: 1px !important;*/
            /*--fc-view-container__ASTERISK_--moz-box-sizing: content-box !important;*/
            /*--fc-view-container__ASTERISK_--webkit-box-sizing: content-box !important;*/
            /*--fc-view-container__ASTERISK_-box-sizing: content-box !important;*/
            /*--fc-view-container__COLON_after--moz-box-sizing: content-box !important;*/
            /*--fc-view-container__COLON_after--webkit-box-sizing: content-box !important;*/
            /*--fc-view-container__COLON_after-box-sizing: content-box !important;*/
            /*--fc-view-container__COLON_before--moz-box-sizing: content-box !important;*/
            /*--fc-view-container__COLON_before--webkit-box-sizing: content-box !important;*/
            /*--fc-view-container__COLON_before-box-sizing: content-box !important;*/
            /*--fc-view-position: relative !important;*/
            /*--fc-view-z-index: 1 !important;*/
            /*--fc-view__LACE_BRACE__table-position: relative !important;*/
            /*--fc-view__LACE_BRACE__table-z-index: 1 !important;*/
            /*--fc_button--moz-box-sizing: border-box !important;*/
            /*--fc_button--webkit-box-sizing: border-box !important;*/
            /*--fc_button-box-sizing: border-box !important;*/
            /*--fc_button-cursor: pointer !important;*/
            /*--fc_button-font-size: var(--body_fc-font-size, 1em) !important;*/
            /*--fc_button-height: 2.1em !important;*/
            /*--fc_button-margin: 0 !important;*/
            /*--fc_button-padding: 0 0.6em !important;*/
            /*--fc_button-white-space: nowrap !important;*/
            /*--fc_button_COLON__COLON_-moz-focus-inner-margin: 0 !important;*/
            /*--fc_button_COLON__COLON_-moz-focus-inner-padding: 0 !important;*/
            /*--fc_button_fc-icon-margin: 0 0.2em !important;*/
            /*--fc_button_fc-icon-position: relative !important;*/
            /*--fc_button_fc-icon-top: -0.05em !important;*/
            /*--fc_button_fc-icon-vertical-align: middle !important;*/
            /*--fc_fc-axis-padding: 0 4px !important;*/
            /*--fc_fc-axis-vertical-align: middle !important;*/
            /*--fc_fc-axis-white-space: nowrap !important;*/
            /*--fc_fc-button-group__LACE_BRACE___ASTERISK_-float: left !important;*/
            /*--fc_fc-button-group__LACE_BRACE___ASTERISK_-margin: 0 0 0 -1px !important;*/
            /*--fc_fc-button-group__LACE_BRACE___COLON_first-child-margin-left: 0 !important;*/
            /*--fc_fc-list-table-table-layout: auto !important;*/
            /*--fc_fc-row-border-style: solid !important;*/
            /*--fc_fc-row-border-width: 0 !important;*/
            /*--fc_fc-row_fc-content-skeleton_table-background: 0 0 !important;*/
            /*--fc_fc-row_fc-content-skeleton_table-border-color: transparent !important;*/
            /*--fc_fc-row_fc-content-skeleton_td-background: 0 0 !important;*/
            /*--fc_fc-row_fc-content-skeleton_td-border-color: transparent !important;*/
            /*--fc_fc-row_fc-helper-skeleton_td-background: 0 0 !important;*/
            /*--fc_fc-row_fc-helper-skeleton_td-border-color: transparent !important;*/
            /*--fc_fc-toolbar__LACE_BRACE___ASTERISK___LACE_BRACE___ASTERISK_-float: left !important;*/
            /*--fc_fc-toolbar__LACE_BRACE___ASTERISK___LACE_BRACE___ASTERISK_-margin-left: 0.75em !important;*/
            /*--fc_fc-toolbar__LACE_BRACE___ASTERISK___LACE_BRACE___COLON_first-child-margin-left: 0 !important;*/
            /*--fc_table-border-collapse: collapse !important;*/
            /*--fc_table-border-spacing: 0 !important;*/
            /*--fc_table-box-sizing: border-box !important;*/
            /*--fc_table-font-size: var(--body_fc-font-size, 1em) !important;*/
            /*--fc_table-table-layout: fixed !important;*/
            /*--fc_table-width: 100% !important;*/
            /*--fc_td-border-style: solid !important;*/
            /*--fc_td-border-width: 1px !important;*/
            /*--fc_td-padding: 0 !important;*/
            /*--fc_td-vertical-align: top !important;*/
            /*--fc_tdfc-today-border-style: double !important;*/
            /*--fc_th-border-style: solid !important;*/
            /*--fc_th-border-width: 1px !important;*/
            /*--fc_th-padding: 0 !important;*/
            /*--fc_th-text-align: center !important;*/
            /*--fc_th-vertical-align: top !important;*/
            /*--fcfc-bootstrap3_a-text-decoration: none !important;*/
            /*--fcfc-bootstrap3_a_SQUARE_BRACKET_OPEN_data-goto_SQUARE_BRACKET_CLOSE__COLON_hover-text-decoration: underline !important;*/
            /*--fcfc-bootstrap4_a-text-decoration: none !important;*/
            /*--fcfc-bootstrap4_a_SQUARE_BRACKET_OPEN_data-goto_SQUARE_BRACKET_CLOSE__COLON_hover-text-decoration: underline !important;*/
            /*--hrfc-divider-border-width: 1px 0 !important;*/
            /*--hrfc-divider-height: 0 !important;*/
            /*--hrfc-divider-margin: 0 !important;*/
            /*--hrfc-divider-padding: 0 0 2px !important;*/
            /*--tr_COLON_first-child__LACE_BRACE__td__LACE_BRACE__fc-day-grid-event-margin-top: 2px !important;*/
            /*--ui-widget_fc-disabled-day-background-image: none !important;*/
            /*--ui-widget_fc-event-color: rgb(255, 255, 255) !important;*/
            /*--ui-widget_fc-event-font-weight: 400 !important;*/
            /*--ui-widget_fc-event-text-decoration: none !important;*/
            /*--ui-widget_tdfc-axis-font-weight: 400 !important;*/
        }

    </style>
</custom-style>
`;
document.head.appendChild($_documentContainer.content);
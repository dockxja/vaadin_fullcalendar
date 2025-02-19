/*
 * Copyright 2018, Stefan Uebe
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions
 * of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
package org.vaadin.stefan.fullcalendar;

import com.vaadin.flow.component.ComponentEvent;
import com.vaadin.flow.component.DomEvent;
import com.vaadin.flow.component.EventData;

import java.time.LocalDate;

/**
 * Client side event: eventLimitClick.
 */
@DomEvent("eventLimitClick")
public class LimitedEntriesClickedEvent extends ComponentEvent<FullCalendar> {
    private final LocalDate clickedDate;

    /**
     * New instance. Awaits the clicked date as iso string (e.g. "2018-10-23").
     *
     * @param source     the source component
     * @param fromClient <code>true</code> if the event originated from the client
     * @param date       clicked time slot as iso string
     */
    public LimitedEntriesClickedEvent(FullCalendar source, boolean fromClient, @EventData("event.detail.date") String date) {
        super(source, fromClient);

        clickedDate = source.getTimezone().converToLocalDateTime(JsonUtils.parseDateTimeString(date, source.getTimezone())).toLocalDate();
    }

    /**
     * Returns the clicked date.
     *
     * @return date
     */
    public LocalDate getClickedDate() {
        return clickedDate;
    }
}

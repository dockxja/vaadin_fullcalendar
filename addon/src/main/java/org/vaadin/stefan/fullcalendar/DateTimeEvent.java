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

import java.time.LocalDateTime;

/**
 * An abstract class for date events, that are not directly entry related.
 */
public abstract class DateTimeEvent extends ComponentEvent<FullCalendar> {

    private final boolean allDay;
    private LocalDateTime dateTime;

    /**
     * New instance. Awaits the date (time) as iso string (e.g. "2018-10-23" or "2018-10-23T13:30").
     *
     * @param source     the source component
     * @param fromClient <code>true</code> if the event originated from the client
     * @param dateString date instance as iso string
     * @param allDay     all day event
     */
    public DateTimeEvent(FullCalendar source, boolean fromClient, String dateString, boolean allDay) {
        super(source, fromClient);

        this.allDay = allDay;
        dateTime = source.getTimezone().converToLocalDateTime(JsonUtils.parseDateTimeString(dateString, source.getTimezone()));

    }

    /**
     * Returns the date time. For day slots the time will be at start of the day.
     *
     * @return date time
     */
    public LocalDateTime getDateTime() {
        return dateTime;
    }

    /**
     * Returns, if the event has occurred for a day slot. False means, it has been for a time slot inside a day.
     *
     * @return all day event
     */
    public boolean isAllDay() {
        return allDay;
    }
}

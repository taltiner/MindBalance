package com.tolgay.mindbalance.exception;

public class DailyCheckinException extends RuntimeException {
    private static final String CREATE_ERROR_MESSAGE = "Unexpected Server Error accured while saving the data.";

    public DailyCheckinException() { super(CREATE_ERROR_MESSAGE); }

    public DailyCheckinException(String customMessage) { super(customMessage); }

    public DailyCheckinException(String customMessage, Throwable cause) {
        super(customMessage, cause);
    }
}

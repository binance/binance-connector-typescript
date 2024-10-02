import { Logger } from '../../src/helpers/logger';
import { LogLevel } from '../../src/modules/enum';

describe('Logger', () => {
    let logger: Logger;

    beforeEach(() => {
        logger = new Logger();
    });

    it('should set and get min log level', () => {
        const newLogLevel = LogLevel.DEBUG;
        logger.setMinLogLevel(newLogLevel);
        expect(logger['minLogLevel']).toBe(newLogLevel);
    });

    it('should throw an error when setting an invalid log level', () => {
        const invalidLogLevel = 'invalid' as LogLevel;
        expect(() => logger.setMinLogLevel(invalidLogLevel)).toThrowError(
            `Invalid log level: ${invalidLogLevel}`
        );
    });

    it('should log messages at the specified level', () => {
        const logSpy = jest.spyOn(console, 'debug').mockImplementation();

        logger.setMinLogLevel(LogLevel.INFO);
        logger.debug('Debug message');
        expect(logSpy).not.toHaveBeenCalled();

        logger.setMinLogLevel(LogLevel.DEBUG);
        logger.debug('Debug message');
        expect(logSpy).toHaveBeenCalledWith(
            expect.stringContaining('[DEBUG]'),
            expect.stringContaining('Debug message')
        );

        logSpy.mockRestore();
    });

    it('should not log messages below the min log level', () => {
        const logSpy = jest.spyOn(console, 'warn').mockImplementation();

        logger.setMinLogLevel(LogLevel.ERROR);
        logger.warn('Warning message');
        expect(logSpy).not.toHaveBeenCalled();

        logSpy.mockRestore();
    });

    it('should create a singleton instance', () => {
        const instance1 = Logger.getInstance();
        const instance2 = Logger.getInstance();
        expect(instance1).toBe(instance2);
    });
});

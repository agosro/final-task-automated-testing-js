import pino from 'pino';
import chalk from 'chalk';

// Configuración base de Pino con salida limpia y sin duplicar nivel
const baseLogger = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname,level', //  elimina el nivel duplicado
    },
  },
});

// Detectar navegador actual dinámicamente
function getBrowserLabel() {
  try {
    if (browser && browser.capabilities && browser.capabilities.browserName) {
      const name = browser.capabilities.browserName.toUpperCase();
      if (name.includes('CHROME')) return chalk.blue(`[${name}]`);
      if (name.includes('EDGE')) return chalk.magenta(`[${name}]`);
      if (name.includes('FIREFOX')) return chalk.yellow(`[${name}]`);
      return chalk.white(`[${name}]`);
    }
  } catch {
    return chalk.gray('[NoBrowser]');
  }
  return chalk.gray('[Unknown]');
}

// Logger con etiquetas coloridas
const logger = {
  info: (msg) => baseLogger.info(`${chalk.blueBright('INFO')}  ${getBrowserLabel()} ${msg}`),
  debug: (msg) => baseLogger.debug(`${chalk.gray('DEBUG')} ${getBrowserLabel()} ${msg}`),
  warn: (msg) => baseLogger.warn(`${chalk.yellow('WARN')}  ${getBrowserLabel()} ${msg}`),
  error: (msg) => baseLogger.error(`${chalk.red('ERROR')} ${getBrowserLabel()} ${msg}`),
};

export default logger;

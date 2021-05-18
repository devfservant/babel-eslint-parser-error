import helmet from 'helmet'

export default helmet({
  contentSecurityPolicy: false,
  dnsPrefetchControl: {
    allow: false,
  },
  frameguard: false,
  hidePoweredBy: true,
  hsts: false,
  ieNoOpen: true,
  noSniff: true,
  permittedCrossDomainPolicies: { permittedPolicies: 'none' },
  xssFilter: true,
})

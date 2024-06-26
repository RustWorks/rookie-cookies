/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export interface CookieObject {
  domain: string
  path: string
  secure: boolean
  expires?: number
  name: string
  value: string
  httpOnly: boolean
  sameSite: number
}
export function version(): string
export function anyBrowser(dbPath: string, domains?: Array<string> | undefined | null, keyPath?: string | undefined | null): Array<CookieObject>
/** Common browsers */
export function firefox(domains?: Array<string> | undefined | null): Array<CookieObject>
export function librewolf(domains?: Array<string> | undefined | null): Array<CookieObject>
export function chrome(domains?: Array<string> | undefined | null): Array<CookieObject>
export function brave(domains?: Array<string> | undefined | null): Array<CookieObject>
export function edge(domains?: Array<string> | undefined | null): Array<CookieObject>
export function opera(domains?: Array<string> | undefined | null): Array<CookieObject>
export function operaGx(domains?: Array<string> | undefined | null): Array<CookieObject>
export function chromium(domains?: Array<string> | undefined | null): Array<CookieObject>
export function vivaldi(domains?: Array<string> | undefined | null): Array<CookieObject>
export function firefoxBased(dbPath: string, domains?: Array<string> | undefined | null): Array<CookieObject>
export function load(domains?: Array<string> | undefined | null): Array<CookieObject>
/** MacOS browsers */
export function safari(domains?: Array<string> | undefined | null): Array<CookieObject>
/** Unix browsers */
export function chromiumBased(dbPath: string, domains?: Array<string> | undefined | null): Array<CookieObject>

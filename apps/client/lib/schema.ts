import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Innstillinger
 *
 *
 */
export interface SiteSettings extends SanityDocument {
  _type: "siteSettings";

  /**
   * Site Title — `string`
   *
   *
   */
  siteTitle?: string;

  /**
   * Site Description — `text`
   *
   *
   */
  siteDescription?: string;

  /**
   * siteLogo — `image`
   *
   *
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessibility
     */
    alt?: string;
  };

  /**
   * Address — `string`
   *
   *
   */
  address?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Phone number — `string`
   *
   *
   */
  phone?: string;

  /**
   * Opening Hours — `array`
   *
   *
   */
  openingHours?: Array<SanityKeyed<DayAndTime>>;
}

/**
 * Ansatte
 *
 *
 */
export interface Employees extends SanityDocument {
  _type: "employees";

  /**
   * Bilde — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Navn — `object`
   *
   *
   */
  name?: {
    _type: "name";
    /**
     * Fornavn — `string`
     *
     *
     */
    firstName?: string;

    /**
     * Etternavn — `string`
     *
     *
     */
    lastName?: string;
  };

  /**
   * Stilling — `string`
   *
   *
   */
  jobTitle?: string;

  /**
   * Beskrivelse — `blockContent`
   *
   *
   */
  description?: BlockContent;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type DayAndTime = {
  _type: "dayAndTime";
  /**
   * Day — `string`
   *
   * Select day of week
   */
  day?:
    | "Mandag"
    | "Tirsdag"
    | "Onsdag"
    | "Torsdag"
    | "Fredag"
    | "Lørdag"
    | "Søndag";

  /**
   * Stengt — `boolean`
   *
   *
   */
  closed?: boolean;

  /**
   * Opens at — `string`
   *
   * Choose when the store opens
   */
  opensAt?: string;

  /**
   * Closes at — `string`
   *
   * Choose when the store closes
   */
  closesAt?: string;
};

export type Documents = SiteSettings | Employees;

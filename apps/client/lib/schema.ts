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
 * Route
 *
 *
 */
export interface Route extends SanityDocument {
  _type: "route";

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * page — `reference`
   *
   * Select the page that this route should point to
   */
  page?: SanityReference<Page>;

  /**
   * Include page in sitemap — `boolean`
   *
   * For search engines. Will be added to /sitemap.xml
   */
  includeInSitemap?: boolean;

  /**
   * Disallow in robots.txt — `boolean`
   *
   * Hide this route for search engines
   */
  disallowRobots?: boolean;
}

/**
 * Omtaler
 *
 *
 */
export interface Reviews extends SanityDocument {
  _type: "reviews";

  /**
   * Tittel — `string`
   *
   *
   */
  title?: string;

  /**
   * Rangering — `rating`
   *
   *
   */
  rating?: Rating;

  /**
   * Omtale — `text`
   *
   *
   */
  content?: string;

  /**
   * Kilde — `url`
   *
   * Lenke til nettstedet omtalen er hentet fra
   */
  source?: string;
}

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
   * Logo — `altImage`
   *
   *
   */
  logo?: AltImage;

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
   * Åpningstider — `array`
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

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Utdrag — `blockContent`
   *
   *
   */
  excerpt?: BlockContent;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Tittel — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Include page in sitemap — `boolean`
   *
   * For search engines. Will be added to /sitemap.xml
   */
  includeInSitemap?: boolean;

  /**
   * Disallow in robots.txt — `boolean`
   *
   * Hide this route for search engines
   */
  disallowRobots?: boolean;

  /**
   * Seksjoner — `array`
   *
   *
   */
  content?: Array<
    SanityKeyed<Hero> | SanityKeyed<ImageSection> | SanityKeyed<TextSection>
  >;

  /**
   * Metadata — `seoMetaData`
   *
   *
   */
  meta?: SeoMetaData;
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

export type SeoMetaData = {
  _type: "seoMetaData";
  /**
   * Metabeskrivelse — `text`
   *
   * Beskrivelse som vises når denne siden dukker opp i søkeresultater eller deles på sosiale medier.
   */
  description?: string;

  /**
   * Metabilde — `image`
   *
   * Dette bildet forhåndsvises når denne siden deles på sosiale medier.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

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

export type AltImage = {
  _type: "altImage";
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
   * Alternativ tekst — `string`
   *
   * Noen av de besøkende kan ikke se bilder, enten fordi de er blinde, fargeblinde, eller svaksynte; i slike tilfeller benyttes alternativ tekst av nettleseren for å beskrive bildet for brukeren.
   */
  alt?: string;
};

export type InternalLink = SanityReference<Route>;

export type Figure = {
  _type: "figure";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type Link = {
  _type: "link";
  /**
   * URL — `url`
   *
   *
   */
  href?: string;
};

export type PortableText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<Figure>
>;

export type Cta = {
  _type: "cta";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  route?: SanityReference<Route>;

  /**
   * External link — `url`
   *
   *
   */
  link?: string;
};

export type SimplePortableText = Array<SanityKeyed<SanityBlock>>;

export type Hero = {
  _type: "hero";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Tagline — `simplePortableText`
   *
   *
   */
  tagline?: SimplePortableText;

  /**
   * Bakgrunnsbilde — `altImage`
   *
   *
   */
  backgroundImage?: AltImage;

  /**
   * Call to actions — `array`
   *
   *
   */
  ctas?: Array<SanityKeyed<Cta>>;
};

export type ImageSection = {
  _type: "imageSection";
  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Text — `simplePortableText`
   *
   *
   */
  text?: SimplePortableText;

  /**
   * Image — `figure`
   *
   *
   */
  image?: Figure;

  /**
   * Call to action — `cta`
   *
   *
   */
  cta?: Cta;
};

export type TextSection = {
  _type: "textSection";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Text — `portableText`
   *
   *
   */
  text?: PortableText;
};

export type Documents =
  | Route
  | Reviews
  | SiteSettings
  | Employees
  | Post
  | Page;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Rating = any;

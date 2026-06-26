interface GetLandingImages {
  imageFolder?: string;
}

export async function getLandingImages({ imageFolder }: GetLandingImages) {
  const modules = import.meta.glob(
    "/src/assets/images/**/*.{png,jpg,jpeg,svg,avif}",
    { eager: true },
  );

  const images = Object.entries(modules)
    .filter(([path]) => path.includes(`/src/assets/images/${imageFolder}/`))
    .map(([, module]) => (module as { default: string }).default);

  return images;
}

interface GetLandingImages {
  imageFolder?: string;
}

export async function getLandingImages({
  imageFolder = "landing",
}: GetLandingImages = {}) {
  const images = import.meta.glob(
    "/src/assets/images/**/*.{jpeg,jpg,png,svg,avif}",
  );

  return Object.keys(images).filter((path) =>
    path.includes(`/src/assets/images/${imageFolder}/`),
  );
}

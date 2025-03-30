export const Brands = () => {
       const brands = [
            { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-1.png' },
            { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-2.png' },
            { name: 'Brand Logo', url: 'assets/images/brand/cecode-brand-3.png' },
        ];
    
    return (
        <section
            className="mt-12 relative bg-cover bg-center bg-no-repeat w-full h-43.5"
            style={{ backgroundImage: 'url("assets/images/slider/slider-2.jpg")' }}
        >
            <div className="flex items-center justify-center gap-9 sm:gap-20 w-full h-full">
                {brands.map((brand, index) => (
                    <img
                        key={`brand-${index}`}
                        src={brand.url}
                        alt={brand.name}
                        className="max-h-20 object-contain"
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
}
import React from "react";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import BulkOrderSection from "./BulkOrderSection";

function ProductSection() {
  return (
    <section className="px-2 sm:px-4 py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-10">
        {/* Sidebar */}
        <div className="w-full lg:w-[280px] shrink-0 flex flex-col gap-6">
          <ProductSidebar />
          <BulkOrderSection />
        </div>

        {/* Product Grid */}
        <div className="flex-1 min-w-0 max-w-[1100px]">
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
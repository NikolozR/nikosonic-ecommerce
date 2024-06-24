import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoriesParam = searchParams.get('categories'); // expects comma-separated categories
  const brandsParam = searchParams.get('brands'); // expects comma-separated brands
  const colorsParam = searchParams.get('color'); // expects comma-separated colors
  const min_price = searchParams.get('min_price');
  const max_price = searchParams.get('max_price');

  const colors = colorsParam ? colorsParam.split(',') : [];
  const categories = categoriesParam ? categoriesParam.split(',') : [];
  const brands = brandsParam ? brandsParam.split(',') : [];
  
  const queryCategories = categories.map(el => `'${el}'`).join(',');
  const queryBrands = brands.map(el => `'${el}'`).join(',');
  const queryColors = colors.map(el => `'${el}'`).join(',');

  let query = `SELECT * FROM products WHERE isActive = TRUE`;
  if (categories.length > 0) {
    query = `${query} AND category IN (${queryCategories})`;
  }
  if (brands.length > 0) {
    query = `${query} AND brand IN (${queryBrands})`;
  }
  if (min_price) {
    query = `${query} AND price >= ${min_price}`;
  }
  if (max_price) {
    query = `${query} AND price <= ${max_price}`;
  }
  if (colors.length > 0) {
    query = `${query} AND color IN (${queryColors})`;
  }

  query = `${query} ORDER BY createdat DESC`;

  try {
    const result = await sql.query(query);
    const rows = result.rows;
    return NextResponse.json({ rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

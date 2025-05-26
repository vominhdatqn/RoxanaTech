import { getDemoDetail, getDemos } from "@/utlis/supabase/queries/demos";
import { createClient } from "@/utlis/supabase/server";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import DemoClientDetailPage from "./DemoClientDetailPage";

export const metadata = {
  title: "Thiết kế website",
  description:
    "Cung cấp giải pháp thiết kế website hiện đại, chuẩn SEO và thân thiện với mọi thiết bị.",
};

// export async function getProps() {
//   const queryClient = new DataConnectQueryClient();

//   // Prefetch the list of movies
//   await queryClient.prefetchDataConnectQuery(listMoviesRef());

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

// async function setUpCacheFirebase() {
//   const queryClient = new DataConnectQueryClient();
//   // Prefetch the list of movies
//   await queryClient.prefetchDataConnectQuery(listDemoRef());
//   return dehydrate(queryClient)
// }

export default async function DemoDetailPage({ params }) {
  const { productId } = params || {};

  const supabase = await createClient();
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["demoDetail", productId],
    queryFn: () => getDemoDetail(supabase, productId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DemoClientDetailPage id={productId} />
    </HydrationBoundary>
  );
}

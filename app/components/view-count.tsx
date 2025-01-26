import { getViewsCount, incrementViews } from 'queries/db';

type Props = {
  slug: string;
};
export default async function ViewCount({ slug }: Props) {
  await incrementViews(slug);
  const views = await getViewsCount();
  const count = views.find((view) => view.slug === slug)?.count || 0;

  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {count.toLocaleString()} views
    </p>
  );
}

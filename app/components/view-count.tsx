'use server';

import { increment } from 'db/actions';
import { getViewsCount } from 'db/queries';
import { cache } from 'react';

type Props = {
  slug: string;
};

const incrementViews = cache(increment);

export default async function ViewCount({ slug }: Props) {
  // await incrementViews(slug);
  const views = await getViewsCount();
  incrementViews(slug);
  const count = views.find((view) => view.slug === slug)?.count || 0;

  return (
    <p className="text-sm text-neutral-600 dark:text-neutral-400">
      {count.toLocaleString()} views
    </p>
  );
}

-- Bookings: remove permissive authenticated SELECT/UPDATE, tighten INSERT
DROP POLICY IF EXISTS "Authenticated users can view bookings" ON public.bookings;
DROP POLICY IF EXISTS "Authenticated users can update bookings" ON public.bookings;
DROP POLICY IF EXISTS "Anyone can create a booking" ON public.bookings;

CREATE POLICY "Anyone can create a booking"
  ON public.bookings
  FOR INSERT
  TO public
  WITH CHECK (status = 'pending');

-- Leads: remove permissive authenticated SELECT/UPDATE
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;
DROP POLICY IF EXISTS "Authenticated users can update leads" ON public.leads;

-- No SELECT/UPDATE/DELETE policies = only service_role (used by edge functions
-- and downstream MDash) can read or modify these tables. Public users can
-- still INSERT via the existing "Anyone can submit a lead" / new booking policy.